from django.urls import path
from employee import views

urlpatterns = [
    path('employee/',views.EmployeeView.as_view()),
]