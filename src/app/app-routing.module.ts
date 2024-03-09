import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorNombreComponent } from './paises/pages/por-nombre/por-nombre.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorSubregionComponent } from './paises/pages/por-subregion/por-subregion.component';
import { InfoPaisComponent } from './paises/pages/info-pais/info-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorNombreComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'subregion',
    component: PorSubregionComponent,
  },
  {
    path: 'pais/:id',
    component: InfoPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
