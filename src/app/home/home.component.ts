import { Component } from '@angular/core';
import { PixabayService } from '../services/pixabay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  welcome_txt = ['w', 'e', 'l', 'c', 'o', 'm', 'e ', 't', 'o ', 'g', 'p', 'i', 'c', 's']

}
