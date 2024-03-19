import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';
import { Messages } from 'src/app/shared/messages/messages';

/**
 * Componente para buscar países por nombre.
 */
@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styleUrls: ['./por-nombre.component.css'],
})
export class PorNombreComponent {
  nombrePais: string = 'NOMBRE DEL PAIS'; //Nombre del país ingresado por el usuario.
  paises: Pais[] = [];
  paisesSugerencias: Pais[] = [];
  mostrarSugerencias: boolean = false; //Lista de sugerencias de países basadas en la búsqueda actual.
  loading: boolean = false; //Indica si la carga está en progreso.
  hayError: boolean = false;
  message: string = '';

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
      this.paisesService.buscarPorNombre(nombrePais).subscribe({
        next: (paises) => ((this.paises = paises), (this.loading = false)),
        error: (e) => (
          (this.paises = []),
          (this.loading = false),
          (this.hayError = true),
          (this.message = Messages.handleResponse(e.status))
        ),
        //complete: () => console.info('complete'),
      });
    }, 1000);
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
      {
        next: (paises) => (this.paises = paises),
        error: (e) => (
          (this.paisesSugerencias = []),
          (this.message = Messages.handleResponse(e.status))
        ),
        //complete: () => console.info('complete'),
      }

      //(paises) => (this.paisesSugerencias = paises.splice(0, 10)),
      //(error) => (this.paisesSugerencias = [])
    );
  }
}
