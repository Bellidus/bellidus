from django.db import models

class Client(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    moedas = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def __str__(self):
        return self.nome