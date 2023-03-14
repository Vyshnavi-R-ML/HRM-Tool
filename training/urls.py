from django.urls import path
from training import views

urlpatterns = [
    path('training_session/', views.Training_Session_View.as_view()),
    path('training/', views.Training_View.as_view())
]