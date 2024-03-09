import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styleUrls: ['./por-nombre.component.css']
})
export class PorNombreComponent {

  nombrePais        : string = '';
  paises            : Pais[] = [];
  paisesSugerencias : Pais[] = [];
  mostrarSugerencias: boolean = false;
  loading           : boolean = false;
  hayError          : boolean = false;

  constructor( private paisesService: PaisesService ) { }

  buscarPorNombre( nombrePais: string ) {

    this.paises   = [];
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.nombrePais = nombrePais;
    
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.paisesService.buscarPorNombre( nombrePais )
      .subscribe( 
        (paises) => this.paises = paises,
        (error) => {
          this.hayError = true;
          this.paises   = [];
        });
    }, 1500);

    
  }

  obtenerSugerencias( nombrePais: string ) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.nombrePais = nombrePais;
    
    this.paisesService.buscarPorNombre( nombrePais )
      .subscribe( 
        paises => this.paisesSugerencias = paises.splice(0,10),
        (error) => this.paisesSugerencias = []
      );

  }
}
