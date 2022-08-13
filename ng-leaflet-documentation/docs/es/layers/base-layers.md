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
* **atribution**: En este caso este dato se usará para añadirle la atribución correspondiente al mapa. Podemos hacer uso de la información integrada como el punto anterior, pero en vez de seleccionar **map** debemos de seleccionar **atribution**. Un ejemplo basándonos en lo anterior podría ser: **tileLayers.baseLayers.openTopoMap.atribution**
* **default**: Esta opción servirá para especificar que si esta capa la queremos añadir por defecto dentro de la selección del control de capas. Tiene que estar asignado el valor **true** en uno de ellos para que funcione correctamente.

Ahora teniendo en cuenta esto, para añadir varias capas base, tenemos que respetar esa estructura del elemento de capa dentro de un array, con el tipo de dato **IBaseLayer[]**

Un ejemplo con las dos capas vistas [en el punto anterior](./default-layer.md).

```typescript
configMap: IConfigMap = {
    layers: {
      baseLayers: [
        {
          label: 'Open Topo Map',
          map: tileLayers.baseLayers.openTopoMap.map,
          atribution: tileLayers.baseLayers.openTopoMap.atribution,
          default: true
        },
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution,
        }
      ]
    },
  };
```
Siendo en el componente lo siguiente:
```typescript
import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  configMap: IConfigMap = {
    layers: {
      baseLayers: [
        {
          label: 'Open Topo Map',
          map: tileLayers.baseLayers.openTopoMap.map,
          atribution: tileLayers.baseLayers.openTopoMap.atribution,
          default: true,
        },
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution,
        },
      ],
    },
  };
}

```
Y en el HTML lo implementamos de la siguiente manera:
```html
<ng-leaflet-map 
[mapId]="'base_layer-map'" 
[config]="configMap">
</ng-leaflet-map>
```
Nos mostrará algo como lo podéis ver a continuación:
![Map Base Layer](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/12-base-layer-start.png)

Podemos hacer la selección de las capas:
![Map Base Layer - Click](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/13-base-layer-start-ctrl.png)

Seleccionando otra de las capas:
![Map Base Layer - Other Layer](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/14-base-layer-other-layer.png)

Tal y como podremos ver en la siguiente demo.

[Stackblitz - Base Layer](https://stackblitz.com/edit/angular-leaflet-map-base-layers-ctrl?file=src/app/app.component.html)
