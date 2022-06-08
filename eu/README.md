---
description: >-
  Angular Leaflet Map liburrutegiarekin lanean hasteko eman behar diren pausoak azalduko dira atal honetan
---

# ⚙ Instalazioa / Konfigurazioa

Liburutegiarekin lanean hasteko, hurrengo erreferentzia beharko dugu:

[NPM - Angular Leaflet Map](https://www.npmjs.com/package/@mugan86/ng-leaflet)

Teniendo como referencia el anterior enlace, para instalar y configurar el paquete con el objetivo de poder implementar los Mapas de Leaflet en Angular de manera sencilla debemos de seguir los siguientes pasos:

### NPM paketea instalatu

Hurrengo agindua exekutatu:

```
npm i @mugan86/ng-leaflet
```

Hau burutzean behar ditugun fitxategiak gehituko dira.

### Paketearen moduloa gehitu

Mapen funtzionalitateekin lan egin behar dugun atalean, **"NgLeafletModule" moduloa forRoot() funtzioarekin** gehitu beharko dugu **app.module.ts**&#x20; fitxategia adibide bezala erabiliz

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

### Estiloak gehitu

Tenemos que tener en cuenta que cuando hemos instalado el paquete, se añadirá la carpeta **`"@mugan86/ng-leaflet"`** dentro de **`"node_modules"`** que contiene el fichero de estilos necesarios para mostrar los mapas correctamente.

Fitxategia hemen aurkituko da:

```
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

**`"styles.css"`** fitxategian honela gehituko dugu:

```
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

Ezarpenak zehaztuta, [erreferentzia honen bitartez](aspectos-basicos/mapa-basico.md) mapen funtzio desberdinekin lan egin ahal izango dugu.

### Konfigurazio egitura

En este apartado, se os muestra la información general que se usará como base para implementar las configuraciones en las diferentes variantes.

Estas las usaremos para las funcionalidades que tiene la librería y se irán explicando punto por punto cuál será su finalidad, como se implementa y el resultado para poder entender todo mejor.

Tendremos la interface **`IConfigMap`**, que es la estructura que usaremos para definir las diferentes opciones que se implementará en los mapas
