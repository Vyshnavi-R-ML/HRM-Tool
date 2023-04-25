from django.urls import path
from authentication import views

urlpatterns = [
    path('auth/',views.AuthenticationView.as_view()),
]