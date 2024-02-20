import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{

  pics: any;
  constructor(
    private pixabayService: PixabayService
  ) {}

  ngOnInit() {
    this.pixabayService.getPics().subscribe((data) => {
      this.pics= data;
      console.log(this.pics);  
    });
  }
}
