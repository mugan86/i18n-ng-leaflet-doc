---
title: Era lehenetsian ezarritako zoom balorea eta ausazkoak
sidebar_position: 4
---

### Ausazko markagailuak era lehenetsian zehaztutako zoom-akin

Esta opción es válida para cuando queramos añadir un mapa con una cantidad de marcadores aleatorios en un punto concreto.

Esto servirá para mostrar una demo sin tener que añadir los marcadores a mano de una manera sencilla y sin implementar muchas configuraciones.

En este apartado, se mostrará el nivel de zoom a 12, que será el establecido por defecto. Esto es configurable y lo veremos en el [siguiente apartado](./random-markers-select-zoom.md).

Lo debemos de implementar teniendo en cuenta lo siguiente:

```typescript
    randomMarkers = true;
```

Konponentea eta plantilla aplikatuz:

```typescript
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomMarkers = true;
}

```

HTML-ean aplikatuz

```html
<ng-leaflet-map [mapId]="'random_markers_map'" [randomMarkers]="randomMarkers">
</ng-leaflet-map>
```

Hurrengo emaitza lortuz:

![Random Markers with Default Zoom level](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/07-random-default-zoom.png)

Hurrengo estekan, adibidea daukazue eskura probatu eta aldaketak egiteko praktikatzeko asmoz:

[Stackblitz - Era lehentsian zehaztutako ausazko markagailuak](https://stackblitz.com/edit/angular-leaflet-map-random-markers?embed=1&file=src/app/app.component.ts&theme=dark)

