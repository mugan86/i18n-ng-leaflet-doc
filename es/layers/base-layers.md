---
title: Capas Base	
sidebar_position: 3
---
# Capas Base	

Ahora que ya tenemos los conocimientos relacionados a [lo básico de los mapas](../aspectos-basicos/mapa-basico.md), [uso del control del zoom](../zoom/positions-btn-texts.md) y la manera de trabajar con los [marcadores](../markers/intro.md) empezamos con el control donde tenemos la opción de poder seleccionar entre las diferentes capas base que dispone la librería, con opción a añadir nuevas junto con las capas de superposición.

En este apartado se va a aprender a añadir las capas base haciendo uso de las existentes con opción a poder añadir otras capas base externa aunque esto por el momento no se añadirá en la documentación.

### Implementación con las capas base

Para añadir el control de las capas en la parte superior derecha (no hay opción a añadirla en otra ubicación en la propia librería, esto será una mejora de cara al futuro), debemos de añadir información dentro del elemento cuyo tipo es **IConfigMap** en la propiedad **layers**.

**layers** tiene un tipo definido con la interface **ILayers** que contiene la siguiente información:

```typescript
interface ILayers {
    baseLayers: Array<IBaseLayer>;
    overLayers?: Array<IOverLayer>;
}
```
Como se puede apreciar en la definición de la interface, tenemos dos propiedas que está definidas como **baseLayers** (capas base, que es lo que vamos a implementar ahora) y **overLayers** (capas de superposición).

Analizando la estructura de la propiedad **baseLayers** encontramos con estas propiedades y sus tipos de información:
```typescript
interface IBaseLayer {
    label?: string;
    map: string;
    atribution: string;
    default?: boolean;
}
```
Desgranando para que sirve cada uno de ellos:
* **label**: Etiqueta que se le va a asignar para mostrar dentro del control.
* **map**: Referencia a la capa que vamos a usar, tal y como hemos explicado antes

Lo debemos de implementar teniendo en cuenta lo siguiente:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
    zoom: {
      position: 'bottomleft', // 'topright', 'topleft', 'bottomleft', 'bottomright'
    },
};
```

Añadiendo tanto en el componente como en el template:

```typescript
import { Component } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  configMap: IConfigMap = {
    center: [45.4374999, 12.3319962],
    zoom: {
      position: 'bottomleft', // 'topright', 'topleft', 'bottomleft', 'bottomright'
    },
  };
}

```

Aplicando en el HTML

```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```

Obteniendo el siguiente resultado:

![Zoom controls Image](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/03-zoom-controls.png)

Y aquí la demos para que podáis probarlo en vivo con las diferentes opciones:

[Stackblitz - Capas Base](https://stackblitz.com/edit/angular-leaflet-map-random-markers-tmqbap?file=src/app/app.component.ts)