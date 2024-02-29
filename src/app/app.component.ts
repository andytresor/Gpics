import { Component } from '@angular/core';
import { PixabayService } from './services/pixabay.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gpics';
  // input_field: any;
  
  // constructor (
  //   private pixabayService: PixabayService,
  //   private router: Router
  // ) {}

  // searchImages(query: string) {

  //   this.router.navigate(['/search_result'], { 
  //     queryParams: { 'search': query }
  //    });
  //   // this.pixabayService.search_Images(query).subscribe((data: any) => {
  //   //   this.input_field=data
  //   //   console.log(this.input_field);
  //   //    this.router.navigate(['/search_result'], { 
  //   //     queryParams: { 'search': query }
  //   //    });
  //   // })
  // }
}
