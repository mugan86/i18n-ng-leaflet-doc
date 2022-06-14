---
title: Era lehenetsian ezarritako zoom balorea eta ausazkoak
sidebar_position: 4
---

### Ausazko markagailuak era lehenetsian zehaztutako zoom-akin

Aukera honek baliagarria da puntu zehatz batean ausazko markagilu sorta bat mapan gehitu nahi dugunean.

Honen erabilpena da adibide azkarrak sortzea konfigurazio askorik zarri gabe eta eskuz gehitu gabe markagailuak.

Atal honetan era lehenetsian ezarritako zoom maila 12-koa izango da. Balio hau aldatu ahalko dugu konfigurazioaz eta hau [hurrengo atal honetan ikusi ahalko dugu](./random-markers-select-zoom.md).

Hurrengo kodea kontutan hartu zehaztu behar dugu:

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

