# Botoien posizioa / testua

Ahora que ya [sabemos trabajar con lo básico de los mapas](../aspectos-basicos/mapa-basico.md), vamos a comenzar a trabajar con los controles donde nos centramos en el control del zoom.

En este apartado se va a aprender a ubicar el control del zoom en las diferentes opciones y también como habilitar los textos que se asignan a los botones "+" y "-" para aumentar / disminuir el zoom.

### Zehaztutako posizioan kokatu

Zoom kontrola gehitu ahal izateko, posizio desberdinetan, (**IConfigMap**) konfigurazio atalaren barruan **"zoom"** aukera gehitu behar dugu **"position"** propietatearen barruan, kontrola maparen barruan kokatzeko:

* **bottomleft**: Behean ezkerretara.
* **bottomright**: Behean eskuinean.
* **topright**: Goian eskuinean.
* **topleft**: Goian ezkerretara, era lehenetsian aukera hau da.

Hurrengo kodea kontutan hartu zehaztu behar dugu:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
    zoom: {
      position: 'bottomleft', // 'topright', 'topleft', 'bottomleft', 'bottomright'
    },
};
```

Konponentea eta plantilla aplikatuz:

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

HTML-an aplikatzen

```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```

Hurrengo emaitza lortuz:

![Zoom controls Image](./../../.gitbook/assets/03-zoom-controls.png)

Hemen adibidea daukazue ikusgai frogak egiteko kodearekin eta aukera desberdinekin:

[Stackblitz - Zoom kontrolaren kokapena](https://stackblitz.com/edit/angular-leaflet-zoom-positions-titles?embed=1&file=src/app/locations.ts&theme=dark)
