import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {LoginComponent} from './_components/login/login.component'


@NgModule({
  exports: [LoginComponent],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    RouterModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
