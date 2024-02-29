import { Component } from '@angular/core';
import { PixabayService } from '../services/pixabay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  input_field= '';
  result: any;
  constructor (
    private pixabayService: PixabayService,
    private router: Router
  ) {}
  searchImages(query: string) {
    this.router.navigate(['/search', { 'search': query }]);
    // this.pixabayService.search_Images(this.input_field).subscribe((data: any)  => {
    //   this.result=data
    //   console.log(this.result);
      
    // })
    

    // this.router.navigate(['/search_result', { 
    //   queryParams: {  'search': query }
    //  }]);
    // this.pixabayService.search_Images(query).subscribe((data: any) => {
    //   this.input_field=data
    //   console.log(this.input_field);
    //    this.router.navigate(['/search_result'], { 
    //     queryParams: { 'search': query }
    //    });
    // })
  }
}
