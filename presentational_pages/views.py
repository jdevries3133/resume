from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'homepage/home.html')

def portfolio(request):
    return render(request, 'portfolio/portfolio.html')

def resume(request):
    return render(request, 'resume/resume.html')
