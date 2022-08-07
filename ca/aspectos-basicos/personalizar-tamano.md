---
title: Personalitzar mida
sidebar_position: 2
description: >-
  En aquest punt s'explicarà com modificar la mida del mapa amb la mida que seleccionem modificant el que tenim per defecte
---

# Personalitzar mida

Si no afegim la informació per especificar la mida del mapa, la mida que tindrà sirà l'especificat en el pas anterior, concretament 100% d'ample i 500px d'alt.

Aparte de mapId que sirve para especificar el id del mapa, vamos a añadir el siguiente @Input con la propiedad size que tendrá la siguiente estructura:

```typescript
{
    width: string;
    height: string;
}
```

Lo podemos añadir directamente en el template o desde el componente:

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

Cuyo resultado visual será algo como esto:

![Map Size](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/01-mapa-tama%C3%B1o.png)

Tal y como podremos ver en la siguiente demo.

[Stackblitz - Personalizando Tamaño](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
