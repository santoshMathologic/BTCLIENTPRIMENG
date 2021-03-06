import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: [
     './left-sidebar.component.css',
    // './left-sidebar.component.scss'
  ],
  animations: [
    trigger('sideMenuAnim', [
      state('active', style(
        {
          marginLeft: '0px',
        },


      )),
      state('inactive', style({
        marginLeft: '-200px',
      })),
      transition('inactive => active', animate('300ms')),
      transition('active => inactive', animate('1000ms'))
    ]),
    trigger('contentAnimation', [
      state('active', style(
        {
          margin: '0px 0px 0px 181px',
          transition: '0.8s all'
        },


      )),
      state('inactive', style({
        margin: '0px',
        transition: '0.8s all'
      })),
    ])
  ]
})
export class LeftSidebarComponent implements OnInit {

  openClose: string = 'active';
  constructor(private router: Router, private route: ActivatedRoute) {
     

  }

  ngOnInit() {
  }
  toggleSidebar(): void {

    this.openClose = (this.openClose === 'active') ? 'inactive' : 'active';

  }

  logout() {
    localStorage.removeItem('currentGame');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';



  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

 
  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }


  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

}
