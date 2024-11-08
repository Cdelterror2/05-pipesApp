import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
//import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';





@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
   // MenuModule

  ]
})

export class PrimeNgModule { }
