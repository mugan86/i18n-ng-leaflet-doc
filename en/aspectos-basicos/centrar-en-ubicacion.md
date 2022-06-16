---
title: Center location
sidebar_position: 3
description: >-
  Once we have controlled the first two aspects, we are going to specify the point in coordinates where we want to locate ourselves
---

# Center location

At this moment we want to center the map camera in some coordinates that we want to specify.

Until now, if we do not add this information, it will use a default coordinate having as reference an array with two numbers in which the latitude and longitude will be.

We have to introduce the coordinates in the following structure of the property:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
};
```

With this information added in the component:

```typescript
import { Component } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';
import { PLACES_LIST_LOCATIONS } from './locations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  locations = PLACES_LIST_LOCATIONS;
  locationsKeys = Object.keys(this.locations);

  configMap: IConfigMap = {
    center: this.locations.BARCELONA as [number, number],
    // [lat, lng] as  [number, number]
  };
}
```

Adding the information in the HTML:

```html
<ng-leaflet-map
  [mapId]="'center__position'"
  [config]="configMap"
></ng-leaflet-map>
```

The result is:

![Map in Center](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/02-mapa-center.png)

And here the demo that you can use to test it and play with it:

[Stackblitz - Center in Map](https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark)

