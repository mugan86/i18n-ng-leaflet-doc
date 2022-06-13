---
title: Tamaina pertsonalizatu
sidebar_position: 2
description: >-
  Ikasiko duguna da nola aldatu maparen tamaina, bai altuera bai zabalera era lehenetsian dauden neurriak aldatuz
---

# Tamaina pertsonalizatu

Si no añadimos la información para especificar el tamaño del mapa, el tamaño que tendrá será el especificado en el paso anterior, concretamente 100% de ancho y 500px de altura.

Aparte de mapId que sirve para especificar el id del mapa, vamos a añadir el siguiente @Input con la propiedad size que tendrá la siguiente estructura:

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

Emaitza hau izango da aurreko kodea finkatzean:

![Map Size](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/01-mapa-tama%C3%B1o.png)

Kodearekin trebatu ahal izango dugu hurrengo adibidean.

[Stackblitz - Tamaina pertsonalizatu](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
