import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-subregion',
  templateUrl: './por-subregion.component.html',
  styleUrls: ['./por-subregion.component.css']
})
export class PorSubregionComponent {

  subregiones          : string[] = [
    'southern europe', 'eastern africa', 'western africa', 'north america', 'polynesia',
    'south america', 'central asia', 'southeast europe', 'northern europe', 'northern africa',
    'south-eastern asia', 'middle africa', 'western asia', 'central america', 'southern asia',
    'caribbean', 'central europe', 'micronesia', 'western europe', 'melanesia', 'eastern asia',
    'southern africa', 'australia and new zealand'
  ]

  subregionSeleccionada: string = '';
  paises               : Pais[] = [];
  loading           : boolean = false;
  hayError          : boolean = false;

  constructor( private paisesService: PaisesService ) { }

  cambiarColorBoton( subregion: string ): string {
  return (subregion === this.subregionSeleccionada) 
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
  }

  seleccionarSubregion( subregion: string ) {
    if ( subregion === this.subregionSeleccionada ) { return; }

    this.loading = true;
    this.subregionSeleccionada = subregion;
    this.paises = [];

    setTimeout(() => {
      this.loading = false;
      this.paisesService.buscarPorSubregion( subregion )
      .subscribe( paises => this.paises = paises,
                  error => this.hayError = true );
    }, 1500);
  }
}
