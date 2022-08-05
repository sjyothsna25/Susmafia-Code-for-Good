from django.shortcuts import render
from django.urls import reverse
from bumble.models import Applicant
from bumble.models import Mafioso
from .forms import CredentialsForm

def login_view(request):
    if request.method == 'POST':
        form = CredentialsForm(request.POST)

        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            try:
                applicant = Applicant.objects.get(email = email)

                if password == applicant.password:
                    return reverse('profile')

                else:
                    return render(request, 'login/login.html', {'form': form, 'error': "The password entered is incorrect!"})

            except:
                try:
                    mafioso = Mafioso.objects.get(email = email)

                    if password == mafioso.password:
                        return reverse('mafioso_profile')

                    else:
                        return render(request, 'login/login.html', {'form': form, 'error': "The password entered is incorrect!"})
                
                except:
                    return render(request, 'login/login.html', {'form': form, 'error': "You have not signed up!"})
                
    else:
        form = CredentialsForm()

    return render(request, 'login/login.html', {'form': form, 'error': ""})

def incomplete_view(request):
    return render(request, 'login/maintenance.html')
