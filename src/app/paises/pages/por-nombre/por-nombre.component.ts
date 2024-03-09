import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

/**
 * Componente para buscar países por nombre.
 */
@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styleUrls: ['./por-nombre.component.css'],
})
export class PorNombreComponent {
  nombrePais: string = ''; //Nombre del país ingresado por el usuario.
  paises: Pais[] = [];
  paisesSugerencias: Pais[] = [];
  mostrarSugerencias: boolean = false; //Lista de sugerencias de países basadas en la búsqueda actual.
  loading: boolean = false; //Indica si la carga está en progreso.
  hayError: boolean = false;

  /**
   * Constructor del componente PorNombreComponent.
   * @param paisesService - Instancia del servicio PaisesService utilizado para obtener datos de países.
   */
  constructor(private paisesService: PaisesService) {}

  /**
   * Realiza una búsqueda de países por nombre.
   * @param nombrePais - Nombre del país a buscar.
   */
  buscarPorNombre(nombrePais: string) {
    this.paises = [];
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.nombrePais = nombrePais;

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.paisesService.buscarPorNombre(nombrePais).subscribe(
        (paises) => (this.paises = paises),
        (error) => {
          this.hayError = true;
          this.paises = [];
        }
      );
    }, 1500);
  }

  /**
   * Obtiene sugerencias de países basadas en el nombre ingresado.
   * @param nombrePais - Nombre del país ingresado por el usuario.
   */
  obtenerSugerencias(nombrePais: string) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.nombrePais = nombrePais;

    this.paisesService.buscarPorNombre(nombrePais).subscribe(
      (paises) => (this.paisesSugerencias = paises.splice(0, 10)),
      (error) => (this.paisesSugerencias = [])
    );
  }
}
