---
title: Tamaina pertsonalizatu
sidebar_position: 2
description: >-
  Ikasiko duguna da nola aldatu maparen tamaina, bai altuera bai zabalera era lehenetsian dauden neurriak aldatuz
---

# Tamaina pertsonalizatu

Maparen tamaina zehazteko informazioa gehitzen ez badugu, hartuko dituen neurriak aurreko urratsean zehaztutakoa izango da, zehazki %100eko zabalera eta 500px altuera.

MapId-az gain, maparen Ida zehazteko erabiltzen dena, honako @Input hau gehituko dugu size propietatearekin, honako egitura hau izango duena:

```typescript
{
    width: string;
    height: string;
}
```

Zuzenean template edo konponente bidez gehitu ahalko dugu:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // konponentean erabili
  size: SizeMap = { width: '300px', height: '500px' };
}
```

Eta zuzenean konfigurazio hori tenplatea-an aplikatuz eta propietatearen balioa erabiliz:


```html
<ng-leaflet-map
  [mapId]="'basic__custom-size__example'"
  [size]="{ width: '500px', height: '200px' }"
></ng-leaflet-map>

<ng-leaflet-map
  [mapId]="'basic__custom-size-two__example'"
  [size]="size"
></ng-leaflet-map>
```

Emaitza hau izango da aurreko kodea finkatzean:

![Map Size](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/01-mapa-tama%C3%B1o.png)

Kodearekin trebatu ahal izango dugu hurrengo adibidean.

[Stackblitz - Tamaina pertsonalizatu](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
