from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

#from .forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages
from bumble.models import Applicant, Match, Mafioso
from django.urls import reverse
from .models import ReferalCode

def index(request):
    return render(request, 'bumble/index.html')


def get_matches_applicant(request, user_id):
    try:
        applicant = Applicant.objects.get(pk=user_id)
    except Applicant.DoesNotExist:
        raise Http404("User does not exist")

    matches = Match.objects.filter(applicant=applicant)
    mafioso = []
    for item in matches:
        mafioso.append(item.mafioso)
    context = {
        "matches": mafioso

    }
    return render(request, "bumble/applicant_matches.html", context)


def get_matches_mafioso(request, m_id):
    try:
        mafioso = Mafioso.objects.get(pk=m_id)
    except Mafioso.DoesNotExist:
        raise Http404("User does not exist")

    matches = Match.objects.filter(mafioso=mafioso)
    applicants = []
    for item in matches:
        applicants.append(item.applicant)
    context = {
        "matches": applicants

    }
    return render(request, "bumble/mafioso_matches.html", context)


from django.shortcuts import render


def referral(request):
    if request.method == 'POST':
        code = request.POST['your_code']
        match = ReferalCode.objects.filter(code=code, used=False)
        match.used=True
        if len(match)==1:
            return redirect('bumble:index')

    return render(request, "bumble/referral.html")


from .forms import UserRegistrationForm



def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()

            messages.success(request, f'Your account has been created. You can log in now!')
            return redirect('bumble:index')
    else:
        form = UserRegistrationForm()

    context = {'form': form}
    return render(request, 'bumble/register.html', context)

def candidate(request):

    applicant = Applicant.objects.all()[0]
    return render(request, "manager.html", {'applicant': applicant})


def profile(request, id):

    queryset = Applicant.objects.get(pk=id)
    context = {
        'profile': queryset
    }
    return render(request, 'bumble/profilepage.html', context)
