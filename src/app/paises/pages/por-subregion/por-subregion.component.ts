import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';
import { Messages } from 'src/app/shared/messages/messages';

/**
 * Componente para mostrar y seleccionar países por subregión.
 */
@Component({
  selector: 'app-por-subregion',
  templateUrl: './por-subregion.component.html',
  styleUrls: ['./por-subregion.component.css'],
})
export class PorSubregionComponent {
  /**
   * Lista de subregiones disponibles.
   */
  get subregiones() {
    return this.paisesService.subregiones;
  } //Lista de regiones disponibles.

  subregionSeleccionada: string = 'SUBREGION'; //Subregión actualmente seleccionada.
  paises: Pais[] = [];
  loading: boolean = false; //Indica si la carga está en progreso
  hayError: boolean = false; //Indica si se produjo un error durante la carga de países.
  message: string = '';

  /**
   * Constructor del componente PorSubregionComponent.
   * @param paisesService - Instancia del servicio PaisesService utilizado para obtener datos de países.
   */
  constructor(private paisesService: PaisesService) {}

  /**
   * Cambia el color del botón según la subregión seleccionada.
   * @param subregion - Subregión a verificar.
   * @returns {string} - Clase CSS para el estilo del botón.
   */
  cambiarColorBoton(subregion: string): string {
    return subregion === this.subregionSeleccionada
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  /**
   * Maneja la selección de una subregión.
   * @param subregion - Subregión seleccionada.
   */
  seleccionarSubregion(subregion: string) {
    if (subregion === this.subregionSeleccionada) {
      return;
    }

    this.loading = true;
    this.subregionSeleccionada = subregion;
    this.paises = [];

    setTimeout(() => {
      this.paisesService.buscarPorRegion(subregion).subscribe({
        next: (paises) => ((this.paises = paises), (this.loading = false)),
        error: (e) => (
          (this.paises = []),
          (this.loading = false),
          (this.hayError = true),
          (this.message = Messages.handleResponse(e.status))
        ),
        complete: () => console.info('complete'),
      });
    }, 1000);
  }
}
