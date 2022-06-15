---
title: Level
sidebar_position: 2
---

# Level

After working with the position controls and the button texts **'+'** and **'-'** In In this section we will learn how to configure the zoom level that the map will have when we load it.

If nothing is added, the default **zoom level will be 12**.

We have to take into consideration that the zoom is between the values ​​of 0 and 20 (included)

To add the zoom control, at different zoom levels, within the configuration section (**IConfigMap**) we have to add within ** "zoom"** in the property **"default"** an integer value between 0 and 20 (included). As mentioned, if we do not add anything to this property, the value will be 12

We must implement it taking into account the following:

```typescript
configMap: IConfigMap = {
    zoom: {
      default: 16 // Number between 0 and 20
    },
};
```

Adding both in the component and in the template:

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
      position: 16, // Number between 0 and 20
    },
  };
}
```

Apply in the HTML

```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```

The result is:

![Zoom Levels](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/04-zoom-levels.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Zoom Levels](https://stackblitz.com/edit/angular-leaflet-zoom-levels?embed=1&file=src/app/app.component.ts&theme=dark)
