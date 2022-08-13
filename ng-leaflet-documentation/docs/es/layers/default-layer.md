---
title: Capa por defecto	
sidebar_position: 2
---
En este apartado lo que se va a enseñar es a añadir una capa por defecto diferente a la que hemos usado hasta este momento, que era la que viene por defecto con Openstreetmap.

La idea es poder personalizar este apartado con alguna de las capas que existen integradas en la librería y también con opción a añadir capas de servicios externos gratuitos y de pago.

La lista de capas que están integradas en la librería las podemos encontrar en el [siguiente enlace](https://github.com/mugan86/ng-leaflet/blob/develop/projects/mugan86/ng-leaflet/src/lib/config/tile-layers/ui.ts).

Por el momento esta es la colección de capas que puede ir en aumento con el tiempo.

### Consideraciones a tener en cuenta
Ahora que ya sabemos donde tenemos que acceder para hacer uso de las capas vamos a ir a la definición de la interfaz **IConfigMap** y nos fijamos en la opción **defaultLayer** que es de tipo **IBaseLayer**.

```typescript
interface IConfigMap {
    ...
    defaultLayers?: IBaseLayer;
    ...
}

interface IBaseLayer {
    label?: string;
    map: string;
    atribution: string;
    default?: boolean;
}
```
Analizando las propiedades de la interface donde se asignará la información tenemos que tener en cuenta lo siguiente:
* **label**: Etiqueta que se le va a asignar para mostrar dentro del control de capas. Ahora **no se va a implementar y lo dejamos en blanco**. Lo veremos a partir del [siguiente punto](./base-layers.md).
* **map**: Referencia a la capa que vamos a usar, mediante el uso de una referencia de una capa que podría ser usando de las que están integradas desde [este punto](https://github.com/mugan86/ng-leaflet/blob/develop/projects/mugan86/ng-leaflet/src/lib/config/tile-layers/ui.ts). Ahí deberíamos de ir a **tileLayers.baseLayers** seleccionamos el tipo de mapa y dentro de el siempre seleccionamos la propiedad **map**. Un ejemplo posible podría ser **tileLayers.baseLayers.openTopoMap.map**.
* **atribution**: En este caso este dato se usará para añadirle la atribución correspondiente al mapa. Podemos hacer uso de la información integrada como el punto anterior, pero en vez de seleccionar **map** debemos de seleccionar **atribution**. Un ejemplo basándonos en lo anterior podría ser: **tileLayers.baseLayers.openTopoMap.atribution**
* **default**: Esta opción servirá para especificar que si esta capa la queremos añadir por defecto dentro de la selección del control de capas, cosa que en este momento no se va a implementar, por lo que se ignora. Lo veremos a partir del [siguiente punto](./base-layers.md).

### Implementar funcionalidad

Ahora que ya tenemos claro la estructura y como debemos de formar la selección de una capa por defecto vamos a centrarnos en el apartado de IConfigMap añadiendo la capa de **openTopoMap** como se ha mostrado anteriormente.

Tendremos que añadirlo de la siguiente manera:
```typescript
configMap: IConfigMap = {
    defaultLayer: {
      map: tileLayers.baseLayers.openTopoMap.map,
      atribution: tileLayers.baseLayers.openTopoMap.atribution
    }
};
```
Teniendo en cuenta la configuración de todo el componente:
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
    defaultLayer: {
      map: tileLayers.baseLayers.openTopoMap.map,
      atribution: tileLayers.baseLayers.openTopoMap.atribution,
    },
  };
}
```

Y en el HTML lo implementamos de la siguiente manera:
```html
<ng-leaflet-map
  [mapId]="'default__layer-map'"
  [config]="configMap"
>
</ng-leaflet-map>
```
Nos mostrará algo como lo podéis ver a continuación:
![Map Default - OpenTopoMap](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/10-default-opentopomap.png)


Y si seleccionamos otro mapa:
```typescript
configMap: IConfigMap = {
    defaultLayer: {
      map: tileLayers.baseLayers.osmHot.map,
      atribution: tileLayers.baseLayers.osmHot.atribution,
    },
  };
```
Se mostrará de la siguiente manera:

![Map Default - OSM Hot](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/11-default-osmhot.png)

Tal y como podremos ver en la siguiente demo.

[Stackblitz - Default Layer](https://stackblitz.com/edit/angular-leaflet-default-layer?file=src/app/app.component.ts)

