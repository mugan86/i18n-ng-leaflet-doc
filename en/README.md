---
description: >-
  Steps to follow for start working with Angular Leaftlet Map library
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

En el apartado que vayamos a usar la funcionalidad, debemos de añadir el módulo **"NgLeafletModule" llamando a la función forRoot()** y podemos tener como referencia hacerlo como ejemplo con **app.module.ts.**&#x20;

De esta manera estaremos haciendo la configuración básica, más adelante se explicará como especificar las configuraciones para implementar la configuración global para no tener que estar añadiendo una y otra vez las configuraciones que usaremos en el mapa por defecto.

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

### Añadir referencia de estilos

Tenemos que tener en cuenta que cuando hemos instalado el paquete, se añadirá la carpeta **`"@mugan86/ng-leaflet"`** dentro de **`"node_modules"`** que contiene el fichero de estilos necesarios para mostrar los mapas correctamente.

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
