import { Component, OnInit } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

import { Router, NavigationEnd } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('headerAnim', [
      state('active', style(
        {
          marginLeft: '0px',
          transition: '0.8s all'
        },


      )),
      state('inactive', style({
        marginLeft: '-180px',
        transition: '0.8s all'
      })),
      //transition('inactive => active', animate('2s all')),
      //transition('active => inactive', animate('2s all'))
    ])
  ]
})
export class HeaderComponent implements OnInit {


  search: string;
  openClose: string = 'active';

  constructor(private leftSidebarComponent: LeftSidebarComponent, public router: Router) {
    

  }


  ngOnInit() {

  }

  setMyStyles() {
    let styles = {
      // 'background-color': "red"
    };
    return styles;
  }

  openCloseSidebar(): void {
    
    this.leftSidebarComponent.toggleSidebar();
    this.openClose = (this.openClose === 'active') ? 'inactive' : 'active';

  }
  

}
