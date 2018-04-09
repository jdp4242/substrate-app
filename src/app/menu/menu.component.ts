import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  navItems: MenuItem[];

  ngOnInit() {
    this.navItems = [{
        label: 'Home', icon: 'fa fa-home', routerLink: 'home',
        styleClass: "ui-state-active"
      },
      {label: 'Services', icon: 'fa fa-truck', routerLink: 'services'},
      {label: 'Color Charts', icon: 'fa fa-columns', routerLink: 'charts'},
      {label: 'Gallery', icon: 'fa fa-camera', routerLink: 'gallery'}
    ];
  }

}
