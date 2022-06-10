---
description: >-
  Steps to follow to get started with Angular Leaftlet Map library
---

# ⚙ Installation / Configuration

Before start working with the library, we are going to use the following reference:

[NPM Library - Angular Leaflet Map](https://www.npmjs.com/package/@mugan86/ng-leaflet)

Having as reference the previous link, for install and configure the package with the objective of implement the Leaflet Maps in Angular easily, we should follow the following steps:

### Install the NPM package

Execute the following command:

```
npm i @mugan86/ng-leaflet
```

Now, the dependencies have been installed on our project.

### Add the module of the package

In the part of the application that we are going to use it, we need to add the module **"NgLeafletModule" calling the function forRoot()** and we can have it as a reference and example in **app.module.ts**&#x20;

In this way we are creating a basic configuration. Later, we are going to explain how to implement a global configuration saving us time in order to not been adding over and over the configuration that are we going to use by default on this map.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Add styles reference

Keep in mind that when you have installed the package, this will add the **`"@mugan86/ng-leaflet"`** folder inside **`"node_modules"`** which contains the necessary styles in order to show the maps correctly.

El fichero está ubicado en:

```
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

Podemos añadirlo en el fichero **`"styles.css"`** de la siguiente manera:

```
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

Con estos ajustes, podemos empezar a trabajar con las funcionalidades de los mapas [a partir de esta referencia](aspectos-basicos/mapa-basico.md).

### Estructura para configuraciones

En este apartado, se os muestra la información general que se usará como base para implementar las configuraciones en las diferentes variantes.

Estas las usaremos para las funcionalidades que tiene la librería y se irán explicando punto por punto cuál será su finalidad, como se implementa y el resultado para poder entender todo mejor.

Tendremos la interface **`IConfigMap`**, que es la estructura que usaremos para definir las diferentes opciones que se implementará en los mapas
