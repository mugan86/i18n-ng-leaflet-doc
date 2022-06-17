---
title: Basic Map
sidebar_position: 1
description: How to add a map with the basic settings and things to consider
---

# Basic Map

Once we have already made the installations and configurations in the previous step, we are going to start obtaining the information from the maps, and what better way to start than doing a super easy example where we will only show the map with the basic settings.

To add a map, we need to add the selector **`"ng-leaflet-map"`** without adding anything else.

```html
<ng-leaflet-map></ng-leaflet-map>
```

With this we will obtain a map with 100% width and 500px height by assigning the id to the "map" layer.

The map id option is customized so that if we want to add more than one map within the page, we can do so to avoid errors and more than one map can be displayed. By default, our recommendation is to add a different id to "map"

We will use the following input to get the custom id:

* **mapId**: By default is "map"

```
<ng-leaflet-map [mapId]="'basic__example'"></ng-leaflet-map>
```

We can see the complete example below:

[Stackblitz - Basic Map](https://stackblitz.com/edit/angular-leaflet-map-basic?embed=1&file=src/app/app.component.html&theme=dark)
