import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {LightboxModule} from 'primeng/lightbox';

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent implements OnInit {

  images: any[];

  constructor() { 
    this.images = [];
    this.images.push({source: 'assets/color-charts/epoxy-solid-cc.jpg', thumbnail: 'assets/color-charts/epoxy-solid-cc-thumb.jpg', title: 'Solid Epoxy'})
    this.images.push({source: 'assets/color-charts/epoxy-quartz-cc.jpg', thumbnail: 'assets/color-charts/epoxy-quartz-cc-thumb.jpg', title: 'Quartz Epoxy'})
  }

  ngOnInit() {
  }

}
