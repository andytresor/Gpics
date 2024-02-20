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
  input_field: any;
  
  constructor (
    private pixabayService: PixabayService
  ) {}

  searchImages(query: string) {
    this.pixabayService.search_Images(query).subscribe((data: any) => {
      this.input_field=data
      console.log(this.input_field);
    })
  }
}
