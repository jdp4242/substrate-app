import { Component, OnInit } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images: any[];

  ngOnInit() {
    this.images = [];
    // this.images.push({source: 'assets/gallery/gallery-1.jpg', alt: '', title: 'Sample #1'});
    // this.images.push({source: 'assets/gallery/gallery-2.jpg', alt: '', title: 'Sample #2'});
    // this.images.push({source: 'assets/gallery/gallery-3.jpg', alt: '', title: 'Sample #3'});
    // this.images.push({source: 'assets/gallery/gallery-4.jpg', alt: '', title: 'Sample #4'});
    // this.images.push({source: 'assets/gallery/gallery-5.jpg', alt: '', title: 'Sample #5'});
    // this.images.push({source: 'assets/gallery/gallery-6.jpg', alt: '', title: 'Sample #6'});
    // this.images.push({source: 'assets/gallery/gallery-7.jpg', alt: '', title: 'Sample #7'});
    this.images.push({source: 'assets/gallery/gallery2-1.jpg', alt: '', title: 'Sample #1'});
    this.images.push({source: 'assets/gallery/gallery2-2.jpg', alt: '', title: 'Sample #2'});
    this.images.push({source: 'assets/gallery/gallery2-3.jpg', alt: '', title: 'Sample #3'});
    this.images.push({source: 'assets/gallery/gallery2-4.jpg', alt: '', title: 'Sample #4'});
    this.images.push({source: 'assets/gallery/gallery2-5.jpg', alt: '', title: 'Sample #5'});
    this.images.push({source: 'assets/gallery/gallery2-6.jpg', alt: '', title: 'Sample #6'});
    this.images.push({source: 'assets/gallery/gallery2-7.jpg', alt: '', title: 'Sample #7'});
    this.images.push({source: 'assets/gallery/gallery2-8.jpg', alt: '', title: 'Sample #8'});
  }
}
