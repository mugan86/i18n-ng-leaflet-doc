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

Amb això obtindrem un mapa amb 100% d'ample i 500px d'altura assignen-li el id a la capa "map".

L'opció del id del mapa és personalitzada perquè si volem afegir més d'un mapa dintre de la pàgina, podem fer-ho per evitar que no doni error i és puguin visualitzar més d'un mapa. Per defecte, nostra recomanació és afegir un id diferent a "map"

Utilitzarem la següent entrada (input) per tenir el id personalitzat:

* **mapId**: Per defecte, serà "map"

```
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

Podrem veure l'exemple complet a continuació:

[Stackblitz - Mapa Bàsic](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
