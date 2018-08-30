import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank.component';
import { BlankRouting } from './blank.routing';


@NgModule({
  imports: [
    CommonModule,
    BlankRouting
  ],
  declarations: [
    BlankComponent,

  ]
})
export class blankModule { }
