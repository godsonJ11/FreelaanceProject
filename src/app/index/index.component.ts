import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
   logo:string='https://gallantize-organizer.s3.ap-south-1.amazonaws.com/gallantize.png';
}
