import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {

   
   param: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pixabayService: PixabayService,
    private route: Router
    
  ) {}

// searchImages(query: string) {
//   this.pixabayService.search_Images(query).subscribe((data: any) =>{
//     this.param = data
//   })
// }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const myParam = params['search']; 
      this.pixabayService.search_Images(myParam).subscribe((data: any) => {
          this.param=data;
          console.log(this.param);
        });
      console.log('Query parameter value:', myParam);
    });   
  }
  // ngOnInit(): void {
  //   // Get search key query params
  //   // With search value do call API
  // }

}