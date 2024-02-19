import { Component } from '@angular/core';
import { PixabayService } from './services/pixabay.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gpics';
  searching: any;
  
  constructor (
    private pixabayService: PixabayService
  ) {}

  searchImages(query: string) {
    this.pixabayService.searchImages(query).subscribe((data: any) => {
      console.log(data);
      
    })
  }

  search(){}
}
