# Nivel

Después de trabajar con los controles de posición y los textos de los botones **'+'** y **'-'** En este apartado se va a aprender configurar el nivel de zoom que tendrá el mapa cuando lo carguemos.

Si no se añade nada, el **nivel del zoom por defecto será 12**.

Tenemos que tener en consideracción, que el zoom está entre los valores de 0 y 20 (incluidos)

Para añadir el control del zoom, en diferentes niveles de zoom, dentro del apartado de configuración (**IConfigMap**) tenemos que añadir dentro de **"zoom"** en la propiedad **"default"** un valor entero entre 0 y 20 (incluidos). Como se ha comentado, si no añadimos nada en esta propiedad, el valor será de 12

Lo debemos de implementar teniendo en cuenta lo siguiente:

```
configMap: IConfigMap = {
    zoom: {
      default: 16 // Número entre 0 y 20 incluidos
    },
};
```

Añadiendo tanto en el componente como en el template:

{% code title="app.component.ts" %}
```javascript
import { Component } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  configMap: IConfigMap = {
    zoom: {
      position: 16, // Número entre 0 y 20 incluidos
    },
  };
}

```
{% endcode %}

Aplicando en el HTML

{% code title="app.component.html" %}
```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```
{% endcode %}

Obteniendo el siguiente resultado:

![](../../.gitbook/assets/04-zoom-levels.png)

Y aquí la demo para que podáis probarlo en vivo con las diferentes opciones:

{% embed url="https://stackblitz.com/edit/angular-leaflet-zoom-levels?embed=1&file=src/app/app.component.ts&theme=dark" %}
