---
title: Mapa Básico
sidebar_position: 1
description: Como añadir un mapa con los ajustes básicos y cosas a tener en cuenta
---

# Mapa Básico

Una vez que ya hemos realizado las instalaciones y configuraciones en el paso anterior, vamos a comenzar obteniendo la información de los mapas, y que mejor que empezar haciendo un ejemplo super fácil donde únicamente mostraremos el mapa con los ajustes básicos.

Para añadir un mapa, tenemos que añadir el selector **`"ng-leaflet-map"`** sin añadir nada más.

```html
<ng-leaflet-map></ng-leaflet-map>
```

Con esto obtendremos un mapa con 100% de ancho y 500px de altura asignándole el id a la capa "map".

La opción del id del mapa es personalizada para que si queremos añadir más de un mapa dentro de la página, podamos hacerlo para evitar que no de error y se puedan visualizar más de un mapa. Por defecto, nuestra recomendación es añadir un id diferente a "map"

Usaremos la siguiente entrada (input) para tener el id personalizado:

* **mapId**: Por defecto, será "map"

```html
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

Podremos ver el ejemplo completo a continuación:

[Stackblitz - Mapa Básico](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
