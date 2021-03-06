import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ColorChartComponent } from './color-chart/color-chart.component';
import { GalleryComponent } from './gallery/gallery.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'charts', component: ColorChartComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
