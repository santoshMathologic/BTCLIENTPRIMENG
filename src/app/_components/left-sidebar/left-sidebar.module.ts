import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar.component';
import { LeftSidebarRouting } from './left-sidebar.routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    LeftSidebarRouting,
    HttpClientModule


  ],
  declarations: [
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent
  ]
})
export class LeftSidebarModule { }
