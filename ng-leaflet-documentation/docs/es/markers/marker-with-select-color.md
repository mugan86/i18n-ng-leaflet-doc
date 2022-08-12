---
title: Marcador seleccionando color
sidebar_position: 6
---
# Selección del color del marcador

Una vez que ya sabemos trabajar con la selección de un marcador haciendo uso del marcador por defecto (el azul), tenemos la opción de poder seleccionar el color del marcador en las diferentes variantes que se proporcionan desde la librería.

Las variantes de color son las siguientes:
* Azul (por defecto).
* Oro.
* Violeta.
* Negro.
* Verde.
* Rojo.
* Amarillo.
* Naranja.

Teniendo en cuenta lo anterior, las opciones para la seleccionar los marcadores son las siguientes:
```typescript
export declare type MarkerColorOptions = 
'black' | 'blue' | 'gold' | 'green' | 'grey' | 'orange' | 'red' | 'violet' | 'yellow';
```

Lo debemos de implementar teniendo en cuenta lo siguiente:

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
  // Para ajustar la cámara al marcador añadido y color del marcador
  configVioletMarkers?: IConfigMap = {
    fitBounds: true,
    markerColor: 'violet', // Añadimos con el color Violeta
  };
```

Añadiendo tanto en el componente como en el template:

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
    configVioletMarkers?: IConfigMap = {
        fitBounds: true,
        markerColor: 'violet', // Añadimos con el color Violeta
    };
}

```

Aplicando en el HTML

```html
<ng-leaflet-map
      [mapId]="'violet_markers'"
      [markers]="markers"
      [config]="configVioletMarkers"
      [size]="size"
    >
    </ng-leaflet-map>
```

Obteniendo el siguiente resultado:

![Markers with select color marker (Violet)](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/09-select-color-marker-violet.png)

Y aquí la demo para que podáis probarlo en vivo con las diferentes variantes de colores:

[Stackblitz - Marcadores seleccionando el color del marcador](https://stackblitz.com/edit/angular-leaflet-map-with-markers-dzaema?file=src/app/app.component.ts)