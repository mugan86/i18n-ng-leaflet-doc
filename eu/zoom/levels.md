# Maila

Después de trabajar con los controles de posición y los textos de los botones **'+'** y **'-'** En este apartado se va a aprender configurar el nivel de zoom que tendrá el mapa cuando lo carguemos.

Zoom mailaren konfigurazio ez badugu gehitzen, **zehaztuko den zoom-aren balioa era lehenetsian 12 izango da**.

Tenemos que tener en consideracción, que el zoom está entre los valores de 0 y 20 (incluidos)

Para añadir el control del zoom, en diferentes niveles de zoom, dentro del apartado de configuración (**IConfigMap**) tenemos que añadir dentro de **"zoom"** en la propiedad **"default"** un valor entero entre 0 y 20 (incluidos). Como se ha comentado, si no añadimos nada en esta propiedad, el valor será de 12

Zehaztu beharra dugu hurrengoa kontutan hartuta:

```typescript
configMap: IConfigMap = {
    zoom: {
      default: 16 // Número entre 0 y 20 incluidos
    },
};
```

Konponentea bai plantilla gehiturik:

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
    zoom: {
      position: 16, // Número entre 0 y 20 incluidos
    },
  };
}
```

HTML-an zehaztuz

```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```

Hurrengo emaitza lorturik:

![Zoom mailak](./../../.gitbook/assets/04-zoom-levels.png)

Hurrengo estekan, adibidea daukazue eskura probatu eta aldaketak egiteko praktikatzeko asmoz:

[Stackblitz - Zoom mailak](https://stackblitz.com/edit/angular-leaflet-zoom-levels?embed=1&file=src/app/app.component.ts&theme=dark)
