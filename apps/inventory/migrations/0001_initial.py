# Generated by Django 5.0.3 on 2024-11-21 01:33

import apps.inventory.models
import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('configuration', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdjustmentDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('current_stock', models.IntegerField(default=0)),
                ('assign_stock', models.IntegerField(default=0)),
                ('final_stock', models.IntegerField(default=0)),
                ('cost', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
            ],
            options={
                'verbose_name': 'Detalle de ajuste de inventario',
                'verbose_name_plural': 'Detalle de ajustes de inventario',
                'db_table': 'adjustment_detail',
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='BeginningInventoryDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.IntegerField(default=0)),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
            ],
            options={
                'verbose_name': 'Detalle de inventario inicial',
                'verbose_name_plural': 'Detalle de inventarios iniciales',
                'db_table': 'beginning_inventory_detail',
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Marca',
                'verbose_name_plural': 'Marcas',
                'db_table': 'brand',
                'permissions': (('view_brand', 'Ver marcas de artículos'), ('add_brand', 'Crear marca de artículo'), ('delete_brand', 'Eliminar marca de artículo'), ('change_brand', 'Modificar marca de artículo')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.PositiveIntegerField(default=0)),
                ('min_stock', models.PositiveIntegerField(default=0)),
                ('max_stock', models.PositiveIntegerField(default=0)),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('reserved', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Inventario de artículo',
                'verbose_name_plural': 'Inventario de artículos',
                'db_table': 'inventory',
                'permissions': (('view_inventory', 'Ver inventario de artículos'), ('change_all_inventory', 'Modificar stock mínimo y máximo de artículos en todos los laboratorios')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='InventoryAdjustment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(blank=True, max_length=30)),
                ('reason', models.CharField(max_length=100)),
                ('comment', models.CharField(blank=True, max_length=250, null=True)),
                ('status', models.CharField(max_length=20)),
                ('date', models.DateField(default=datetime.datetime.now)),
                ('hour', models.TimeField(default=datetime.datetime.now)),
            ],
            options={
                'verbose_name': 'Ajuste de inventario',
                'verbose_name_plural': 'Ajuste de inventarios',
                'db_table': 'inventory_adjustment',
                'permissions': (('view_adjustment', 'Ver ajustes de inventario'), ('add_adjustment', 'Crear ajuste de inventario'), ('change_adjustment', 'Modificar ajuste de inventario')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(blank=True, db_index=True, max_length=25, null=True)),
                ('name', models.CharField(max_length=150)),
                ('item_type', models.CharField(blank=True, max_length=25)),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(blank=True, default='items/default.jpg', null=True, upload_to=apps.inventory.models.image_directory_path)),
                ('is_active', models.BooleanField(default=True)),
                ('with_tax', models.BooleanField(default=True, verbose_name='¿Se cobra impuesto?')),
                ('is_inventoriable', models.BooleanField(default=False)),
                ('use_in_tests', models.BooleanField(default=False, verbose_name='¿Se usa en examenes?')),
            ],
            options={
                'verbose_name': 'Artículo',
                'verbose_name_plural': 'Artículos',
                'db_table': 'item',
                'permissions': (('view_item', 'Ver artículos'), ('add_item', 'Crear artículo'), ('delete_item', 'Eliminar artículo'), ('change_item', 'Modificar artículo')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='ItemCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='nombre')),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Categoría de artículo',
                'verbose_name_plural': 'Categoría de artículos',
                'db_table': 'item_category',
                'permissions': (('view_item_category', 'Ver categorías de artículos'), ('add_item_category', 'Crear categoría de artículo'), ('delete_item_category', 'Eliminar categoría de artículo'), ('change_item_category', 'Modificar categoría de artículo')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='MeasureUnit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Unidad de medida',
                'verbose_name_plural': 'Unidades de medida',
                'db_table': 'measure_unit',
                'permissions': (('view_unit_measure', 'Ver unidades de medida'), ('add_unit_measure', 'Crear unidad de medida'), ('delete_unit_measure', 'Eliminar unidad de medida'), ('change_unit_measure', 'Modificar unidad de medida')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='Model',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Modelo',
                'verbose_name_plural': 'Modelos',
                'db_table': 'model',
                'permissions': (('view_model', 'Ver modelos de artículos'), ('add_model', 'Crear modelo de artículo'), ('delete_model', 'Eliminar modelo de artículo'), ('change_model', 'Modificar modelo de artículo')),
                'default_permissions': (),
            },
        ),
        migrations.CreateModel(
            name='BeginningInventory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(blank=True, max_length=25)),
                ('note', models.TextField(blank=True)),
                ('status', models.CharField(blank=True, max_length=20)),
                ('total', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('last_date', models.DateField(default=datetime.datetime.now)),
                ('hour', models.TimeField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('laboratory', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='configuration.laboratory')),
            ],
            options={
                'verbose_name': 'Inventario inicial',
                'verbose_name_plural': 'Inventarios iniciales',
                'db_table': 'beginning_inventory',
                'permissions': (('view_beginning_inventory', 'Ver inventarios iniciales'), ('add_beginning_inventory', 'Crear inventario inicial'), ('change_beginning_inventory', 'Modificar inventario inicial')),
                'default_permissions': (),
            },
        ),
    ]
