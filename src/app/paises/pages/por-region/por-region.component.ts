import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

/**
 * Componente para mostrar y seleccionar países por región.
 */
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; //Lista de regiones disponibles.
  regionSeleccionada: string = ''; //rEGIÑON actualmente seleccionada.
  paises: Pais[] = [];
  loading: boolean = false; //Indica si la carga está en progreso
  hayError: boolean = false; //Indica si se produjo un error durante la carga de países.

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

    this.loading = true;
    this.regionSeleccionada = region;
    this.paises = [];

    setTimeout(() => {
      this.loading = false;
      this.paisesService.buscarPorRegion(region).subscribe(
        (paises) => (this.paises = paises),
        (error) => (this.hayError = true)
      );
    }, 1500);
  }
}
