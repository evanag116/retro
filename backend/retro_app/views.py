from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import csv, os, random, json, pprint, shutil
from tempfile import NamedTemporaryFile
from .models import MyCSV


# Create your views here.

contestants_list = []
hall_of_fame = []


def index(request):
    print('home!')
    
    
    
    
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

def data_load(request):
    # load the csv data into the global variables when the page loads
    csv_data = MyCSV.load()
    global contestants_list
    global hall_of_fame
    contestants_list = csv_data['contestants_list']
    hall_of_fame = csv_data['hall_of_fame']

    
    # images for the hall of fame scroll loop
    data = {
        'hall_of_fame': hall_of_fame,
        'contestant_list': contestants_list
    }
    
    return JsonResponse(data)
    # return HttpResponse(request, data)
 
    
#     return render(request, 'retro_app/index.html', data)



def contestant(request):
    contestant_count = len(contestants_list)
    # HOF_count = len(hall_of_fame)
    
    # shuffle contestant list for good measure
    random.shuffle(contestants_list)
    
    # create a random index and use it to select the winner
    random_index = random.randint(0, contestant_count-1)
    selected_student = contestants_list[random_index]
    
    # provide data for the front-end to use
    data = {
        'winner': selected_student,
        # 'hall_of_fame': hall_of_fame,
        # 'HOF_count': HOF_count,
        # 'contestant_count': contestant_count
    }
    return JsonResponse(data)
    # return render(request, 'retro_app/contestant.html', data)

@csrf_exempt
def save_winner(request):
    body = json.loads(request.body)
    winner = body['winner']
    
    current_csv_dir = os.path.abspath(os.path.dirname(__file__))
    current_csv_path = os.path.join(current_csv_dir, "students.csv")
    tempfile = NamedTemporaryFile('w', newline='', delete=False)
    fields = ['name', 'selected_count']
    
    with open(current_csv_path, 'r', newline='') as csvFile, tempfile:
        reader = csv.DictReader(csvFile, delimiter=',', quotechar='"')
        writer = csv.DictWriter(tempfile, delimiter=',', quotechar='"', fieldnames=fields)
        writer.writeheader()
        
        for person in reader:
            if person['name'] == winner:
                count = int(person['selected_count'])
                count = str(count + 1)
                writer.writerow({'name': winner, 'selected_count': count})
            else:
                writer.writerow({'name': person['name'], 'selected_count': person['selected_count']})
    
    shutil.move(tempfile.name, current_csv_path)
    
    print('success')
    return JsonResponse({
        'success': True
    })

