import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserplanComponent } from './userplan.component';
import { UserPlanRouting } from './userplan.routing';

@NgModule({
  imports: [
    CommonModule,
    UserPlanRouting
  ],
  declarations: [
    UserplanComponent

  ]
})
export class UserplanModule { }
