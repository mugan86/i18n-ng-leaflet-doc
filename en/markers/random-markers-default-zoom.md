---
title: Random and default zoom level
sidebar_position: 4
---

### Add random markers with default zoom

This option is valid for when we want to add a map with a number of random markers at a specific point.

This option is valid for when we want to add a map with a number of random markers at a specific point.

In this section, the zoom level will be shown at 12, which will be established by default. This is configurable and we will see it in the [next section](./random-markers-select-zoom.md).

We must implement it taking into account the following:

```typescript
    randomMarkers = true;
```

Adding both in the component and in the template:

```typescript
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomMarkers = true;
}

```

Apply in the HTML

```html
<ng-leaflet-map [mapId]="'random_markers_map'" [randomMarkers]="randomMarkers">
</ng-leaflet-map>
```

The result is:

![Random Markers with Default Zoom level](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/07-random-default-zoom.png)

In the next link we found a example demo to check this feature:

[Stackblitz - Random markers with default zoom](https://stackblitz.com/edit/angular-leaflet-map-random-markers?embed=1&file=src/app/app.component.ts&theme=dark)

