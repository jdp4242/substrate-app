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
    this.navItems = [
      {label: 'Home', icon: 'fa fa-home', url: 'home'},
      {label: 'Contact', icon: 'fa fa-info-circle'},
      {label: 'Services', icon: 'fa fa-truck'},
      {label: 'Color Charts', icon: 'fa fa-columns'},
      {label: 'Gallery', icon: 'fa fa-camera'}
    ];
  }

}
