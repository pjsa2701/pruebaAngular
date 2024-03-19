import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';
import { InfoPaisComponent } from './pages/info-pais/info-pais.component';

const routes: Routes = [
  {
    path: '', // Ruta base
    children: [ // Rutas hijas
      {
        path: '', // Ruta vacía (por defecto)
        component: PorNombreComponent, // Componente a renderizar
        pathMatch: 'full', // Coincidencia exacta
      },
      {
        path: 'nombre', // Ruta para buscar por nombre
        component: PorNombreComponent, // Componente a renderizar
      },
      {
        path: 'region', // Ruta para buscar por región
        component: PorRegionComponent, // Componente a renderizar
      },
      {
        path: 'subregion', // Ruta para buscar por subregión
        component: PorSubregionComponent, // Componente a renderizar
      },
      {
        path: ':id', // Ruta dinámica para mostrar información de un país por su ID
        component: InfoPaisComponent, // Componente a renderizar
      },
      {
        path: '**', // Ruta para cualquier otra ruta no definida
        redirectTo: '', // Redirecciona a la ruta base
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
