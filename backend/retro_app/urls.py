from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contestant-is/', views.data_load, name='data_load'),
    path('winner/', views.contestant, name='contestant'),
    path('save/', views.save_winner, name='say_hello')
]
