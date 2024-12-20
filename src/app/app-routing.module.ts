import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'ventes',
    loadChildren: () => import('./ventes/ventes.module').then( m => m.VentesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
