from django.apps import AppConfig


class ConfigurationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.configuration'

    def ready(self):
        import apps.configuration.signals