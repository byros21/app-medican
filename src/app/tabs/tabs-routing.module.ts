import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pacientes',
        loadChildren: () => import('../pages/pacientes/pacientes.module').then(m => m.PacientesPageModule)
      },
      {
        path: 'historia clinica',
        loadChildren: () => import('../pages/historia-clinica/historia-clinica.module').then(m => m.HistoriaClinicaPageModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('../pages/citas/citas.module').then(m => m.CitasPageModule)
      },
      {
        path: 'medicos',
        loadChildren: () => import('../pages/medicos/medicos.module').then(m => m.MedicosPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/pacientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/pacientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
