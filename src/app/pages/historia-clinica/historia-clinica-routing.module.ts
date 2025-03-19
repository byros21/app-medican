import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaClinicaPage } from './historia-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaClinicaPageRoutingModule {}
