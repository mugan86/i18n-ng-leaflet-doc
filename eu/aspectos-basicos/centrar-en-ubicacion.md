---
description: >-
  Lehen bi kontzeptu nagusiak trebatu ditugun ostean, kokapenaren koordenatuak zehaztuko ditugu mapan zehazteko
---

# Kokapenean erdiratu

Une honetan kokapenaren koordenatu geografikoak izanda erdiratuko dugu kamera, ondo ikusteko.

Une honerarte, informazio hau ez badugu gehittzen era lehenetsian ezarrita dauden koordenatu geografikoak erabiliko dira, bi zenbakiko array bat erabiliz non lehenbizi latitudea eta bigarrena longitudea izango da.

Propietatearen egituraren barruan sartu behar ditugu koordenatu geografikoak:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
};
```

Konpoonentean informazio hau gehituko dugu:

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

Informazioa HTML-ean gehituz:

```html
<ng-leaflet-map
  [mapId]="'center__position'"
  [config]="configMap"
></ng-leaflet-map>
```

Hurrengo emaitza lorturik:

![Mapa erdian](./../../.gitbook/assets/02-mapa-center.png)

Hona hemen adibidea proiektu gisa probatu eta aldaketak egiteko nahi dugun modura:

[Stackblitz - Kokapenean erdiratu](https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark)

