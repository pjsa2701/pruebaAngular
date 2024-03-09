import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfoPaisComponent } from './pages/info-pais/info-pais.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        PorNombreComponent,
        PorRegionComponent,
        PorSubregionComponent,
        BarraBusquedaComponent,
        TablaPaisesComponent,
        InfoPaisComponent
    ],
    exports: [
        PorNombreComponent,
        PorRegionComponent,
        PorSubregionComponent,
        InfoPaisComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule
    ]
})
export class PaisesModule { }
