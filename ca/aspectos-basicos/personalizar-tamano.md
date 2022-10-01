---
title: Personalitzar mida
sidebar_position: 2
description: >-
  En aquest punt s'explicarà com modificar la mida del mapa amb la mida que seleccionem modificant el que tenim per defecte
---

# Personalitzar mida

Si no afegim la informació per especificar la mida del mapa, la mida que tindrà sirà l'especificat en el pas anterior, concretament 100% d'ample i 500px d'alt.

A part de mapId que serveix per a especificar l´id del mapa, afegim el següent @Input amb la propietat size que tindrà la següent estructura:

```typescript
{
    width: string;
    height: string;
}
```

El podem afegir directament al template o des de el component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Usarlo en el componente
  size: SizeMap = { width: '300px', height: '500px' };
}
```

Y aplicando directamente esa configuración en el template y usando el valor de la propiedad:


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

El resultat visual serà una cosa com això:

![Mida del mapa](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/01-mapa-tama%C3%B1o.png)

Tal com podem veure a la següent demo.

[Stackblitz - Personalitzan la mida](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
