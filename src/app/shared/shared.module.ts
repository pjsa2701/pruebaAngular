import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LoadingComponent, MenuComponent, NavbarComponent],
  exports: [LoadingComponent, MenuComponent,NavbarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
