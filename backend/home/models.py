from django.conf import settings
from django.db import models


class Testdata(models.Model):
    "Generated Model"
    name = models.TextField()
    address = models.TextField(
        null=True,
        blank=True,
    )
