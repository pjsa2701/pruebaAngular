import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';
import { switchMap } from 'rxjs';
import { Messages } from 'src/app/shared/messages/messages';

/**
 * Componente que muestra información detallada de un país.
 */
@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css'],
})
export class InfoPaisComponent {
  pais!: Pais;
  hayError: boolean = false;
  loading: boolean = false; //Indica si la carga está en progreso.
  message: string = '';

  /**
   * Constructor del componente.
   *
   * @param activatedRoute - Servicio que proporciona acceso a la información de la ruta activa.
   * @param paisesService - Servicio que maneja las operaciones relacionadas con los países.
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) {}

  /**
   * Método que se ejecuta cuando el componente es inicializado.
   * Se utiliza para realizar tareas de inicialización, como cargar datos iniciales.
   */
  ngOnInit(): void {
    // Inicialización de las banderas de estado
    this.hayError = false; // Indica si hubo un error durante la carga de datos
    this.loading = true; // Indica si se están cargando los datos

    // Retardo simulado de 1 segundo antes de cargar los datos
    setTimeout(() => {
      // Se suscribe a los cambios en los parámetros de la ruta
      this.activatedRoute.params
        // Utiliza switchMap para realizar una nueva búsqueda basada en el parámetro 'id'
        .pipe(switchMap(({ id }) => this.paisesService.buscarPorAlpha(id)))
        // Se suscribe al observable resultante
        .subscribe({
          // Maneja el próximo evento (cuando se reciben datos exitosamente)
          next: (pais) => (
            // Asigna el país recibido a la variable 'pais'
            (this.pais = pais),
            // Establece 'loading' en 'false' ya que la carga ha terminado
            (this.loading = false)
          ),
          // Maneja el evento de error (cuando ocurre un error)
          error: (e) => (
            // Establece 'loading' en 'false' ya que la carga ha terminado
            (this.loading = false),
            // Establece 'hayError' en 'true' para indicar que ha ocurrido un error
            (this.hayError = true),
            // Asigna el mensaje de error correspondiente
            (this.message = Messages.handleResponse(e.status))
          ),
          // Maneja el evento de completado
          //complete: () => console.info('complete'),
        });
    }, 1000); // Retardo de 1 segundo antes de realizar la búsqueda (simulado)
  }
}
