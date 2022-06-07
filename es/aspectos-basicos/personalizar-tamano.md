---
description: >-
  En este punto se va ha explicar como modificar el tamaño del mapa con el
  tamaño que seleccionemos modificando el que tenemos por defecto
---

# Personalizar tamaño

Si no añadimos la información para especificar el tamaño del mapa, el tamaño que tendrá será el especificado en el paso anterior, concretamente 100% de ancho y 500px de altura.

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

![Map Size](./../../.gitbook/assets/01-mapa-tamaño.png)

Tal y como podremos ver en la siguiente demo.

[Stackblitz - Personalizando Tamaño](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
