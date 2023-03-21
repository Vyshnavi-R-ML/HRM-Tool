from django.urls import path
from nomination import views

urlpatterns = [
    path('nomination/',views.NominationView.as_view()),
    path('rejection/',views.RejectionView.as_view())
]