---
title: Position / Buttons Text
sidebar_position: 1
---

# Position / Buttons Text

Now that we [know how to work with the basics of maps](../aspectos-basicos/mapa-basico.md), we are going to start working with the controls where we focus on the zoom control.

In this section you will learn how to locate the zoom control in the different options and also how to enable the texts that are assigned to the "+" and "-" buttons to increase / decrease the zoom.

### Place in position

To add the zoom control, in different positions, within the configuration section (**IConfigMap**) we have to add within **"zoom "** in the property **"position"** the following values ​​to locate the control on the map:

* **bottomleft**: Bottom left.
* **bottomright**: Bottom Right.
* **topright**: Top Right.
* **topleft**: Top Left, by default.

We must implement it taking into account the following:

```typescript
configMap: IConfigMap = {
    center: [number, number],
    // [lat, lng] as  [number, number]
    zoom: {
      position: 'bottomleft', // 'topright', 'topleft', 'bottomleft', 'bottomright'
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
    center: [45.4374999, 12.3319962],
    zoom: {
      position: 'bottomleft', // 'topright', 'topleft', 'bottomleft', 'bottomright'
    },
  };
}

```

Apply in the HTML

```html
<ng-leaflet-map [mapId]="'zoom_controls'" [config]="configMap"></ng-leaflet>
```

The result is:

![Zoom controls Image](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/03-zoom-controls.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Zoom Control Positions](https://stackblitz.com/edit/angular-leaflet-zoom-positions-titles?embed=1&file=src/app/locations.ts&theme=dark)
