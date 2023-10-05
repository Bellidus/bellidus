from django.contrib import admin
from .models import Client

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['id', 'nome', 'email', 'moedas']
    search_fields = ['nome', 'email']