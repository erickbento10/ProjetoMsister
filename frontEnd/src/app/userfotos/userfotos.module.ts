import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserfotosRoutingModule } from './userfotos-routing.module';
import { UserfotosComponent } from './userfotos/userfotos.component';


@NgModule({
  declarations: [
    UserfotosComponent
  ],
  imports: [
    CommonModule,
    UserfotosRoutingModule
  ]
})
export class UserfotosModule { }
