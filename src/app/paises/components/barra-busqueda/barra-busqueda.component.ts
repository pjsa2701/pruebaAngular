import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

/**
 * Componente que representa una barra de búsqueda.
 */
@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
})
export class BarraBusquedaComponent {
  /**
   * Evento que se emite cuando se presiona la tecla Enter en la barra de búsqueda.
   *
   * @remarks
   * El evento lleva consigo el término de búsqueda ingresado.
   */
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  /**
   * Evento que se emite después de un breve período de tiempo desde la última pulsación de tecla.
   *
   * @remarks
   * Útil para implementar búsquedas en tiempo real sin sobrecargar el sistema con solicitudes innecesarias.
   * El evento lleva consigo el término de búsqueda ingresado.
   */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /**
   * Texto de sugerencia que se muestra en la barra de búsqueda.
   *
   * @remarks
   * Esta propiedad está decorada con @Input(), lo que significa que puede recibir
   * datos desde el componente padre que utiliza este componente.
   */
  @Input() placeholder: string = '';

  /**
   * Subject que actúa como un debouncer para retrasar las emisiones del evento `onDebounce`.
   */
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    //Sonfigura el debouncer para emitir el evento `onDebounce` después de un retraso de 300 milisegundos.
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  /**
   * Método que se ejecuta al presionar la tecla Enter en la barra de búsqueda.
   *
   * @remarks
   * Emite el evento `onEnter` con el término de búsqueda ingresado.
   * Este término puede ser utilizado en el componente padre para realizar operaciones de búsqueda.
   */
  buscar() {
    this.onEnter.emit(this.termino);
  }

  /**
   * Método que se ejecuta cuando se presiona una tecla en la barra de búsqueda.
   *
   * @remarks
   * Activa el debouncer para emitir el evento `onDebounce` después de un retraso.
   * Este método también actualiza el término de búsqueda actual que se muestra en tiempo real.
   */
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
