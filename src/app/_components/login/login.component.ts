import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {MessageService} from 'primeng/api';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]

})
export class LoginComponent implements OnInit {

  private username: string = 'root';
  private password: string = 'root123'
  private role: string = 'admin'
  private token: string;
  constructor() {

  }

  ngOnInit() {
  }

  login() {

    console.log("Login here");
    console.log(this.username);
    console.log(this.password);
  }
}
