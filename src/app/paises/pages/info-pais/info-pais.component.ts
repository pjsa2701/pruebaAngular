import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css']
})
export class InfoPaisComponent {


  pais!: Pais;

  id: string;

  constructor( 
      private activatedRoute: ActivatedRoute,
      private paisesService: PaisesService
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id')!;

      this.paisesService.buscarPorAlpha(this.id).subscribe(pais => {
        this.pais = pais;
        console.log(this.pais)
      })
    }
    

  ngOnInit(): void {
    /*this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisesService.buscarPorAlpha( id )  ),
      tap( console.log )
    )
    .subscribe( pais => this.pais = pais );*/
  }

}
