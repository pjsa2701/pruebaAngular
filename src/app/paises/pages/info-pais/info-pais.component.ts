import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

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
  id: string;
  hayError: boolean = false;

  /**
   * Constructor del componente.
   *
   * @param activatedRoute - Servicio que proporciona acceso a la información de la ruta activa.
   * @param paisesService - Servicio que maneja las operaciones relacionadas con los países.
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) {
    /**
     * Asigna el valor del parámetro 'id' desde la ruta activa al componente.
     * El parámetro 'id' se utiliza para identificar de manera única el país.
     * Se asume que este parámetro siempre está presente en la URL.
     * @see ActivatedRoute
     */
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    /**
     * @remarks
     * Existe una incógnita ya que cargar el componente la variavle pais se encuentra seteada 
     * con los valores que llegan de la API
     * 
     * Se pueden mostrar con el pipe JSON, pero no se pueden acceder a sus atributos mediante 
     * la interpolación de cadenas o expresiones dentro de las plantillas (templates) HTML
     */
     
    this.cargarInformacionPais();
    console.log(this.pais);
  }

  /**
   * Método privado para cargar la información del país.
   */
  private cargarInformacionPais(): void {
    setTimeout(() => {}, 1500);

    this.paisesService.buscarPorAlpha(this.id).subscribe(
      (pais) => {
        this.pais = pais;
      },
      (error) => (this.hayError = true)
    );
  }
}
