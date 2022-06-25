---
title: Add two or more
sidebar_position: 3
---

### Add more than one bookmark

To add more than one marker on the map, we must know the location of each of the points that we are going to insert on the map using geographic coordinates (latitude and longitude). Remember that we have several options proposed in the previous point that will help you to have different locations more at hand.

We must implement it taking into account the following:

```typescript
    // Location information
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

Adding both in the component and in the template:

```typescript
import { Component } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Location information
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

Apply in the HTML

```html
<ng-leaflet-map
  [mapId]="'two_markers_map'"
  [markers]="markers"
  [config]="config"
>
</ng-leaflet-map>
```

The result is:

![Markers with fitbounds](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/06-two-markers-fitbounds.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Markers adjusting the camera](https://stackblitz.com/edit/angular-leaflet-map-with-markers?embed=1&file=src/app/app.component.ts&theme=dark)