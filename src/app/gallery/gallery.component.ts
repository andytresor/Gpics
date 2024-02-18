import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{

  pics: any;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getPics().subscribe((data) => {
      this.pics= data;
      console.log(this.pics);
      
    });
  }
}
