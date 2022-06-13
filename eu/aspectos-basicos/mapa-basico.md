---
title: Oinarrizko mapa
sidebar_position: 1
description: Oinarrizko konfigurazioekin gehitu mapa bat eta kontutan hartu beharrekoak
---

# Oinarrizko mapa

Una vez que ya hemos realizado las instalaciones y configuraciones en el paso anterior, vamos a comenzar obteniendo la información de los mapas, y que mejor que empezar haciendo un ejemplo super fácil donde únicamente mostraremos el mapa con los ajustes básicos.

Para añadir un mapa, tenemos que añadir el selector **`"ng-leaflet-map"`** sin añadir nada más.

```html
<ng-leaflet-map></ng-leaflet-map>
```

Hau aplikatuz, maparen zabalera 100%-koa eta altuera 500px-koa izango da 'map' id-a duen geruzari.

La opción del id del mapa es personalizada para que si queremos añadir más de un mapa dentro de la página, podamos hacerlo para evitar que no de error y se puedan visualizar más de un mapa. Por defecto, nuestra recomendación es añadir un id diferente a "map"

Usaremos la siguiente entrada (input) para tener el id personalizado:

* **mapId**: Era lehenetsian "map" izango da

```
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

Adibidea martxan ikusi dezakegu hurrengo estekan:

[Stackblitz - Oinarrizko mapa](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
