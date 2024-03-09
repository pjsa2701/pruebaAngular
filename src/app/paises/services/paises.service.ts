import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})

/**
 * Servicio para interactuar con la API de países.
 */
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  /**
   * Obtiene los parámetros HTTP comunes utilizados en las solicitudes a la API.
   * @returns {HttpParams} - Instancia de HttpParams con los parámetros configurados.
   */
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'flags,name,capital,population,area,region,subregion,cca2'
    );
  }

  /**
   * Busca países por nombre.
   * @param nombre - Nombre del país a buscar.
   * @returns {Observable<Pais[]>} - Observable que emite un array de objetos Pais.
   */
  buscarPorNombre(nombre: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${nombre}`;
    return this.httpClient.get<Pais[]>(url, { params: this.httpParams });
  }

  /**
   * Busca países por región.
   * @param region - Nombre de la región a la que pertenecen los países.
   * @returns {Observable<Pais[]>} - Observable que emite un array de objetos Pais.
   */
  buscarPorRegion(region: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Pais[]>(url, { params: this.httpParams });
  }

  /**
   * Busca países por subregión.
   * @param subregion - Nombre de la subregión a la que pertenecen los países.
   * @returns {Observable<Pais[]>} - Observable que emite un array de objetos Pais.
   */
  buscarPorSubregion(subregion: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/subregion/${subregion}`;
    return this.httpClient.get<Pais[]>(url, { params: this.httpParams });
  }

  /**
   * Busca un país por su código alfa.
   * @param id - Código alfa del país a buscar.
   * @returns {Observable<Pais>} - Observable que emite un objeto Pais.
   */
  buscarPorAlpha(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Pais>(url);
  }
}
