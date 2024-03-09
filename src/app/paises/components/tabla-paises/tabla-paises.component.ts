import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent {

  /**
   * Lista de países que se mostrarán en la tabla.
   *
   * @remarks
   * Esta propiedad está decorada con @Input(), lo que significa que puede recibir
   * datos desde el componente padre que utiliza este componente.
   */
  @Input() paises: Pais[] = [];
}
