---
title: Random and select zoom level
sidebar_position: 5
---

### Add random markers by selecting the zoom level

This option is valid for when we want to add a map with a number of random markers at a specific point.

This option is valid for when we want to add a map with a number of random markers at a specific point.

Unlike the previous point, we will select the zoom level to a value between 0 (world view) and 20 (closest), which will be the default.

We must implement it taking into account the following:

```typescript
    randomMarkers = true;
    configMapLevelFourteen: IConfigMap = {
        center: [45.4374999, 12.3319962],
        zoom: {
            default: 14,
        },
    };
```

Adding both in the component and in the template:

```typescript
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    selectLocation = [45.4374999, 12.3319962]
    randomMarkers = true;
    // Zoom level default - 12
    configMap: IConfigMap = {
        center: this.selectLocation,
    };

    // Zoom level - 14
    configMapLevelFourteen: IConfigMap = {
        center: this.selectLocation,
        zoom: {
            default: 14,
        },
    };

    // Zoom level - 18
    configMapLevelEightteen: IConfigMap = {
        center: this.selectLocation,
        zoom: {
            default: 18,
        },
    };

    // Zoom level - 7
    configMapLevelSeven: IConfigMap = {
        center: this.selectLocation,
        zoom: {
            default: 7,
        },
    };
}

```

Apply in the HTML

```html
    <!-- Zoom level = 12 (default)-->
    <ng-leaflet-map
        [mapId]="'zoom_default'"
        [size]="{ height: '300px', width: '400px' }"
        [config]="configMap"
        [randomMarkers]="randomMarkers"
    ></ng-leaflet-map>

    <!-- Zoom level = 14-->
    <ng-leaflet-map
        [mapId]="'zoom_level_fourteen'"
        [size]="{ height: '300px', width: '400px' }"
        [config]="configMapLevelFourteen"
        [randomMarkers]="randomMarkers"
    ></ng-leaflet-map>

    <!-- Zoom level = 18-->
    <ng-leaflet-map
        [mapId]="'zoom_level_eighteen'"
        [size]="{ height: '300px', width: '400px' }"
        [config]="configMapLevelEightteen"
        [randomMarkers]="randomMarkers"
    ></ng-leaflet-map>

    <!-- Zoom level = 7-->
    <ng-leaflet-map
        [mapId]="'zoom_level_seven'"
        [size]="{ height: '300px', width: '400px' }"
        [config]="configMapLevelSeven"
        [randomMarkers]="randomMarkers"
    ></ng-leaflet-map>

```

The result is:

![Random Markers with select Zoom level](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/08-random-select-zoom.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Random markers by selecting zoom level](https://stackblitz.com/edit/angular-leaflet-zoom-levels-random-markers?embed=1&file=src/app/app.component.ts&theme=dark)

