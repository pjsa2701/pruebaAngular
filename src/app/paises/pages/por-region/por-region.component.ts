import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';
import { Messages } from 'src/app/shared/messages/messages';

/**
 * Componente para mostrar y seleccionar países por región.
 */
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  get regiones() {
    return this.paisesService.regiones;
  } //Lista de regiones disponibles.
  regionSeleccionada: string = 'REGION'; //rEGIÑON actualmente seleccionada.
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
   * Cambia el color del botón según la región seleccionada.
   * @param region - región a verificar.
   * @returns {string} - Clase CSS para el estilo del botón.
   */
  cambiarColorBoton(region: string): string {
    return region === this.regionSeleccionada
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  /**
   * Maneja la selección de una subregión.
   * @param region - Subregión seleccionada.
   */
  seleccionarRegion(region: string) {
    if (region === this.regionSeleccionada) {
      return;
    }
    this.paises = [];
    this.hayError = false;
    this.regionSeleccionada = region;
    this.loading = true;

    setTimeout(() => {
      this.paisesService.buscarPorRegion(region).subscribe({
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
