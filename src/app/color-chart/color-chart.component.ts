import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {LightboxModule} from 'primeng/lightbox';

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent implements OnInit {

  concretes: any[];
  epoxies: any[];

  constructor() {
    this.concretes = []; 
    this.concretes.push({source: 'assets/color-charts/concrete-stain-cc.jpg', thumbnail: 'assets/color-charts/concrete-stain-cc-thumb.jpg', title: 'Concrete Stain'});

    this.epoxies = [];
    this.epoxies.push({source: 'assets/color-charts/epoxy-solid-cc.jpg', thumbnail: 'assets/color-charts/epoxy-solid-cc-thumb.jpg', title: 'Solid Epoxy'});
    this.epoxies.push({source: 'assets/color-charts/epoxy-quartz-cc.jpg', thumbnail: 'assets/color-charts/epoxy-quartz-cc-thumb.jpg', title: 'Quartz Epoxy'});
    this.epoxies.push({source: 'assets/color-charts/epoxy-metallic-cc.jpg', thumbnail: 'assets/color-charts/epoxy-metallic-cc-thumb.jpg', title: 'Metallic Epoxy'});
  }

  ngOnInit() {
  }

}
