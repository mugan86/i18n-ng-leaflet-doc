---
title: Mapa bàsic
sidebar_position: 1
description: Com afegir un mapa amb ajustaments bàsics i aspectes a tenir en compte
---

# Mapa Bàsic

Una vegada que hem realitzat les instal·lacions i configuracions en el pas anterior, hem de començar obtenint la informació dels mapes, i que millor que començar fen un exemple superfàcil on únicament mostrarem el mapa amb ajustaments bàsics.

Per afegir un mapa, hem d'afegir el selector **`"ng-leaflet-map"`** sense afegir res més.

```html
<ng-leaflet-map></ng-leaflet-map>
```

Con esto obtendremos un mapa con 100% de ancho y 500px de altura asignándole el id a la capa "map".

La opción del id del mapa es personalizada para que si queremos añadir más de un mapa dentro de la página, podamos hacerlo para evitar que no de error y se puedan visualizar más de un mapa. Por defecto, nuestra recomendación es añadir un id diferente a "map"

Usaremos la siguiente entrada (input) para tener el id personalizado:

* **mapId**: Por defecto, será "map"

```
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

Podremos ver el ejemplo completo a continuación:

[Stackblitz - Mapa Básico](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
