---
title: Ausazkoak eta zoom aukeraketa
sidebar_position: 5
---

### Zoom maila aukeraturik gehitu ausazko markagailuak

Aukera hau baliagaria da puntu zehatz batean ausazko markatzaile ugari dituen mapa bat gehitu nahi dugunean.

Funtzionalitate honek ahalbidetuko digu adibide bat markagailu sorta bat erakusteko modu errez eta konfiguraziorik ezarri gabe.

Aurreko puntuarekin alderatuta, 0 (mundu mailako ikuspegia) eta 20 (gertuena) arteko zoom balioa aukeratu beharko dugu, era lehentsian zehaztuko dena izango dela.

Hurrengo kodea kontutan hartu zehaztu behar dugu:

```typescript
    randomMarkers = true;
    configMapLevelFourteen: IConfigMap = {
        center: [45.4374999, 12.3319962],
        zoom: {
            default: 14,
        },
    };
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

HTML-ean aplikatuz

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

Hurrengo emaitza lortuz:

![Random Markers with select Zoom level](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/08-random-select-zoom.png)

Hurrengo estekan, adibidea daukazue eskura probatu eta aldaketak egiteko praktikatzeko asmoz:

[Stackblitz - Zoom-maila hautatuz ausazko margailuekin](https://stackblitz.com/edit/angular-leaflet-zoom-levels-random-markers?embed=1&file=src/app/app.component.ts&theme=dark)

