import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgcaretakerRoutingModule } from './pgcaretaker-routing.module';
import { PgcaretakerComponent } from './pgcaretaker.component';


@NgModule({
  declarations: [
    PgcaretakerComponent
  ],
  imports: [
    CommonModule,
    PgcaretakerRoutingModule
  ]
})
export class PgcaretakerModule { }
