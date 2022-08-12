---
id: readme
sidebar_position: 3
title: Instal·lació / Configuració
description: >-
  Passos a seguir per poder començar a treballar amb la llibreria Angular Leaflet Map
---

# Instalació / Configuració

Per poder començar a treballar amb la llibreria, tenim que usar la següent referència:

[Llibrería NPM - Angular Leaflet Map](https://www.npmjs.com/package/@mugan86/ng-leaflet)

Tenint com a referència l'anterior enllaç, per instal·lar i configurar el paquet amb l'objectiu de poder implementar els Mapes de Leaflet en Angular de manera senzilla hem de seguir els següents pasos:

### Instal·lar el paquet NPM

Executarem la següent comanda:

```
npm i @mugan86/ng-leaflet
```

Amb aquests instal·larem les dependències al nostre projecte.

### Agregar mòdul del paquet

En l'apartat que volem utilitzar la funcionalitat, hem d'agregar el mòdul **"NgLeafletModule" trucant a la funció forRoot()** i podem tenir com a referència fer-ho per exemple **app.module.ts**&#x20;

D'aquesta manera estarem fent la configuració bàsica, més endavant s'explicarà com especificar les configuracions per implementar la configuració global per no haver d'estar agrega'n una vegada i una altra les configuracions que utilitzarem en el mapa per defecte.

```typescript
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

### Agregar referència d'estils

Hem de tenir en compte que quan hem instal·lat el paquet, s'agregarà la carpeta**`"@mugan86/ng-leaflet"`**dintre de**`"node_modules"`** que conté el fitxer d'estils necesaris per mostrar els mapes correctament.

El fitxer està ubicat en:

```bash
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

Podem agregar-lo en el fitxer **`"styles.css"`** de la manera següent:

```bash
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

Con estos ajustes, podemos empezar a trabajar con las funcionalidades de los mapas [a partir de esta referencia](aspectos-basicos/mapa-basico.md).

### Estructura per configuracions

En aquest apartat, es mostra la informació general que s'utilitzarà com a base per implementar les configuracions amb les diferents variants.

Aquestes les utilitzarem per a les funcionalitats.

Tindrem la interfície **`IConfigMap`**, que és l'estructura que utilitzarem per definir les següents opcions que s'implementara en els mapes
