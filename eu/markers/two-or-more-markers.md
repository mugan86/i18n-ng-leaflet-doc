---
title: Markagailu bat baino gehiago gehitu
sidebar_position: 3
---

### Markagailu bat baino gehiago gehitu

Para añadir más de un marcador en el mapa, debemos de saber la ubicaciones de cada unos de los puntos que vamos a insertar en el mapa mediante coordenadas geográficas (latitud y longitud). Recordad que tenemos varias opciones propuestas en el punto anterior que os servirá para tener más a mano diferentes ubicaciones.

Hurrengo kodea kontutan hartuta gehitu behar dugu:

```typescript
    // Información de la ubicación
    markers: Array<IMarker> = [
        {
          position: {
            lat: 43.17757110078426,
            lng: -2.3661233885984085,
          },
        },
        {
          position: {
            lat: 43.177781697765305,
            lng: -2.367583962060063,
          },
        },
  ];
  // Para ajustar la cámara al marcador añadido
  config?: IConfigMap = {
    fitBounds: true,
  };
```

Konponentea eta template gehiturik:

```typescript
import { Component } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    // Información de la ubicación
    markers: Array<IMarker> = [
        {
            position: {
                lat: 43.17757110078426,
                lng: -2.3661233885984085,
            },
        },
        {
            position: {
                lat: 43.177781697765305,
                lng: -2.367583962060063,
            },
        },
    ];
    // Para ajustar la cámara al marcador añadido
    config?: IConfigMap = {
        fitBounds: true,
    };
}

```

HTML-ean aplikatuz

```html
<ng-leaflet-map
  [mapId]="'two_markers_map'"
  [markers]="markers"
  [config]="config"
>
</ng-leaflet-map>
```

Hurrengo emaitza lortuko da:

![Markagailua kamera egokitzapenarekin fitBounds bidez](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/06-two-markers-fitbounds.png)

Hurrengo estekan, adibidea daukazue eskura probatu eta aldaketak egiteko praktikatzeko asmoz:

[Stackblitz - Markagailuak kamera fikatzen kokapenen arabera](https://stackblitz.com/edit/angular-leaflet-map-with-markers?embed=1&file=src/app/app.component.ts&theme=dark)