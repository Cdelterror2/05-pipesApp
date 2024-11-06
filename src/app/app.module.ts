import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//configuración del locale de la app
import localEsCO from '@angular/common/locales/es-CO';
import localPtPT from '@angular/common/locales/pt-PT';
import localEnBI from '@angular/common/locales/en-BI';

import { registerLocaleData } from '@angular/common';

//se manda a llamar para que establezca en angular los locales
registerLocaleData(localEsCO);
registerLocaleData(localPtPT);
registerLocaleData(localEnBI);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
