import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})

export class PorRegionComponent {

  regiones          : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionSeleccionada: string = '';
  paises            : Pais[] = [];
  loading           : boolean = false;
  hayError          : boolean = false;

  constructor( private paisesService: PaisesService ) { }

  cambiarColorBoton( region: string ): string {
    return (region === this.regionSeleccionada) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  seleccionarRegion( region: string ) {

    if ( region === this.regionSeleccionada ) { return; }

    this.loading = true;
    this.regionSeleccionada = region;
    this.paises = [];

    setTimeout(() => {
      this.loading = false;
      this.paisesService.buscarPorRegion( region )
      .subscribe( paises => this.paises = paises,
                  error => this.hayError = true );
    }, 1500);
  }
}
