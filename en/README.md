---
id: readme
sidebar_position: 3
title: Installation / Configuration
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
export class AppModule {} [BrowserModule, NgLeafletModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Add styles reference

Keep in mind that when you have installed the package, this will add the **`"@mugan86/ng-leaflet"`** folder inside **`"node_modules"`** which contains the necessary styles in order to show the maps correctly.

The file is located in:

```
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

We can add it in our **`"styles.css"`** file like this:

```
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

Con estos ajustes, podemos empezar a trabajar con las funcionalidades de los mapas [a partir de esta referencia](aspectos-basicos/mapa-basico.md).

### Structure for configurations

In this section, we show you the general information that will be used as a basis to implement the configurations in the different variants.

We will use these for the functionalities that the library has and will explain point by point what its purpose will be, how it is implemented and the result in order to understand everything better.

We will have the interface **`IConfigMap`**, which is the structure that we will use to define the different options that will be implemented in the maps
