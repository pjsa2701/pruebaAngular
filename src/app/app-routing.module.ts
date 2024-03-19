import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definición de las rutas principales de la aplicación
const routes: Routes = [
  {
    path: 'paises', // Ruta base para el módulo de países
    loadChildren: () =>
      import('./paises/paises.module').then((m) => m.PaisesModule), // Carga el módulo de países de forma dinámica
  },
  {
    path: '**', // Ruta para cualquier otra ruta no definida
    redirectTo: 'paises', // Redirige a la ruta base de países
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
