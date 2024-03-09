import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LoadingComponent, MenuComponent],
  exports: [LoadingComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
