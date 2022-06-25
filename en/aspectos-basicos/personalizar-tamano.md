---
title: Custom size
sidebar_position: 2
description: >-
  At this point it will be explained how to modify the size of the map with the size that we select by modifying the one that we have by default
---

# Custom size

If we don't add the information to specify the size of the map, the size it will have will be the one specified in the previous step, specifically 100% width and 500px height.

Apart from mapId, which is used to specify the id of the map, we are going to add the following @Input with the size property, which will have the following structure:

```typescript
{
    width: string;
    height: string;
}
```

We can add it directly to the template or from the component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // implement in component
  size: SizeMap = { width: '300px', height: '500px' };
}
```

And directly applying that configuration in the template and using the value of the property:


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

Whose visual result will be something like this:

![Map Size](https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/01-mapa-tama%C3%B1o.png)

As we can see in the next demo.

[Stackblitz - Custom size](https://stackblitz.com/edit/angular-leaflet-map-basic-custom-size?embed=1&file=src/app/app.component.ts&theme=dark)
