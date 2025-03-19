import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaClinicaPageRoutingModule } from './historia-clinica-routing.module';

import { HistoriaClinicaPage } from './historia-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaClinicaPageRoutingModule
  ],
  declarations: [HistoriaClinicaPage]
})
export class HistoriaClinicaPageModule {}
