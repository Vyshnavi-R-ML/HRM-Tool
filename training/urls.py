from django.urls import path
from training import views

urlpatterns = [
    path('session/', views.TrainingSessionView.as_view()),
    path('', views.TrainingView.as_view()),
    path('feedback/',views.FeedbackView.as_view()),
    path('enrollment/',views.EnrollmentView.as_view()),
]