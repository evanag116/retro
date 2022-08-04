import os, csv

class MyCSV:
    
    @classmethod
    def load(cls):
        contestants_list = []
        hall_of_fame = []
        
        csv_dir = os.path.abspath(os.path.dirname(__file__))
        csv_path = os.path.join(csv_dir, "students.csv")
        with open(csv_path) as csvfile:
            csv_data = csv.DictReader(csvfile)
            for person in csv_data:
                if int(person['selected_count']) > 0:
                    hall_of_fame.append(person)
                else:
                    contestants_list.append(person)
        
        data = {
            'contestants_list': contestants_list,
            'hall_of_fame': hall_of_fame
        }
        return data