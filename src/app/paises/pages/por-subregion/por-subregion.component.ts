import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

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
  subregiones: string[] = [
    'southern europe',
    'eastern africa',
    'western africa',
    'north america',
    'polynesia',
    'south america',
    'central asia',
    'southeast europe',
    'northern europe',
    'northern africa',
    'south-eastern asia',
    'middle africa',
    'western asia',
    'central america',
    'southern asia',
    'caribbean',
    'central europe',
    'micronesia',
    'western europe',
    'melanesia',
    'eastern asia',
    'southern africa',
    'australia and new zealand',
  ];

  subregionSeleccionada: string = ''; //Subregión actualmente seleccionada.
  paises: Pais[] = [];
  loading: boolean = false; //Indica si la carga está en progreso
  hayError: boolean = false; //Indica si se produjo un error durante la carga de países.

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
      this.loading = false;
      this.paisesService.buscarPorSubregion(subregion).subscribe(
        (paises) => (this.paises = paises),
        (error) => (this.hayError = true)
      );
    }, 1500);
  }
}
