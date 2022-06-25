---
title: Add marker item
sidebar_position: 2
---

### Add marker Item

To add a simple marker on the map, we must know the location of the place through geographical coordinates (latitude and longitude) of the point that we want to indicate on our map. If you do not know this information, you can resort to different resources to be able to obtain geographic coordinates very easily. We find examples such as:
* [Google Maps](https://www.google.es/maps)
* [Openstreetmap](https://www.openstreetmap.org/)
* [We Go Here](https://wego.here.com/) **(VERY RECOMMENDED)**

We must implement it taking into account the following:

```typescript
  // Location information
  markers: Array<IMarker> = [
    {
      position: {
        lat: 21.3320135,
        lng: -157.8287631,
      },
    },
  ];
  // To snap the camera to the added marker
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
          lat: 21.3320135,
          lng: -157.8287631,
        },
      },
  ];
  // To snap the camera to the added marker
  config?: IConfigMap = {
      fitBounds: true,
  };
}

```

Apply in the HTML

```html
<ng-leaflet-map
  [mapId]="'basic_marker_map'"
  [markers]="markers"
  [config]="config"
>
</ng-leaflet-map>
```

The result is:

![Marker with fitbounds](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/05-one-marker-basic-fitbounds.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Marker adjusting the camera](https://stackblitz.com/edit/angular-leaflet-map-with-marker?embed=1&file=src/app/app.component.html&theme=dark)
