import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Pais } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient ) { }

  get httpParams () {
    return new HttpParams().set( 'fields', 'flags,name,capital,population,area,region,subregion,cca2' );
  }

  buscarPorNombre( termino: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.httpClient.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarPorRegion( region: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.httpClient.get<Pais[]>( url, { params: this.httpParams });
  }

  buscarPorSubregion( region: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/subregion/${ region }`;
    return this.httpClient.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarPorAlpha( id: string ):Observable<Pais>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.httpClient.get<Pais>( url );
  }
}
