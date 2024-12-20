import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentesPageRoutingModule } from './ventes-routing.module';

import { VentesPage } from './ventes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentesPageRoutingModule
  ],
  declarations: [VentesPage]
})
export class VentesPageModule {}
