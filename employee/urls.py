from django.urls import path
from employee import views

urlpatterns = [
    path('employee/',views.Employee_View.as_view()),
    path('rm_request/', views.RM_Request_View.as_view())
]