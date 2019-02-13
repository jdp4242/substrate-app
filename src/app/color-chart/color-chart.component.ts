import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {LightboxModule} from 'primeng/lightbox';

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent implements OnInit {

  colorCharts: any[];

  constructor() {
    this.colorCharts = []; 

    this.colorCharts.push({
      source: 'assets/color-charts/epoxy-quartz.jpg', 
      thumbnail: 'assets/color-charts/epoxy-quartz-thumb.jpg', 
      title: 'Epoxy Quartz'});

    this.colorCharts.push({
      source: 'assets/color-charts/epoxy-solid-colors.jpg', 
      thumbnail: 'assets/color-charts/epoxy-solid-colors-thumb.jpg', 
      title: 'Epoxy Solid Colors'});

    this.colorCharts.push({
        source: 'assets/color-charts/epoxy-vinyl-flakes.jpg', 
        thumbnail: 'assets/color-charts/epoxy-vinyl-flakes-thumb.jpg', 
        title: 'Epoxy Vinyl Flakes'});

    this.colorCharts.push({
        source: 'assets/color-charts/epoxy-metallic-colors.jpg', 
        thumbnail: 'assets/color-charts/epoxy-metallic-colors-thumb.jpg', 
        title: 'Epoxy Metallic Colors'});

    this.colorCharts.push({
        source: 'assets/color-charts/acid-concrete-stains.jpg', 
        thumbnail: 'assets/color-charts/acid-concrete-stains-thumb.jpg', 
        title: 'Acid Concrete Stains'});
  }

  ngOnInit() {
  }

}
