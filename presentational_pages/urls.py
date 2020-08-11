from django.urls import path
from .views import home, portfolio, resume

urlpatterns = [
    path('', home),
    path('portfolio/', portfolio),
    path('resume/', resume)
]