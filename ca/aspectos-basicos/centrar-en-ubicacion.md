---
title: Centrar en ubicació
sidebar_position: 3
description: >-
  Una vegada ja tenim controlats els dos primers aspectes, especifiquem el punt amb coordenades on volem ubicar-nos
---

# Centrar en ubicació

En aquest moment volem centrar la càmera del mapa amb unes coordenades que nosaltres volem especificar.

Fins el moment, si no afegim aquesta informació s´utilitzarà unes coordenades per defecte tenint com a a referència un array amb dos nombres en els quals estarán la latitud i la longitud.

Les coordenades les hem d'introduir amb la següent estructura de la propietat:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
};
```

Amb aquesta informació afegida al component:

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

Afegint la informació a l'HTML:

```html
<ng-leaflet-map
  [mapId]="'center__position'"
  [config]="configMap"
></ng-leaflet-map>
```

Obtenint el següent resultat:

![Map in Center](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/02-mapa-center.png)

I aquí la demo que podeu utilitzar per provar-ho i experimentar:

[Stackblitz - Centrar en ubicació](https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark)

