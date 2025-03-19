import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'historia-clinica',
    loadChildren: () => import('./pages/historia-clinica/historia-clinica.module').then( m => m.HistoriaClinicaPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'medicos',
    loadChildren: () => import('./pages/medicos/medicos.module').then( m => m.MedicosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
