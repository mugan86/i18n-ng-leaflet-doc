---
title: Oinarrizko mapa
sidebar_position: 1
description: Oinarrizko konfigurazioekin gehitu mapa bat eta kontutan hartu beharrekoak
---

# Oinarrizko mapa

Egin behar diren instalazioak eta konfigurazioak burututa, mapetatik informazioa lortzen hasiko gara, eta zer hobe adibide erraz bat egitea baino, non mapa oinarrizko ezarpenekin soilik erakutsiko dugun.

Mapa bat gehitu ahal izateko, **`"ng-leaflet-map"`** seleketorea gehitu behar dugu beste ezer gehitu gabe.

```html
<ng-leaflet-map></ng-leaflet-map>
```

Hau aplikatuz, maparen zabalera 100%-koa eta altuera 500px-koa izango da 'map' id-a duen geruzari.

Maparen id aukera pertsonalizatuta da, orri barruan mapa bat baino gehiago gehitu nahi izanez gero, akatsak saihesteko eta mapa bat baino gehiago bistaratu ahal izateko. Era lehenetsian, gure gomendioa da "map" balorea ez den beste balore bat gehitzea da, adibidez "map__arrunta"

Id pertsonalizatua izateko hurrengo sarrera (input) erabiliko dugu:

* **mapId**: Era lehenetsian "map" izango da

```
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

Adibidea martxan ikusi dezakegu hurrengo estekan:

[Stackblitz - Oinarrizko mapa](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
