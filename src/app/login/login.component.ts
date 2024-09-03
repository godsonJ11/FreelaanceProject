import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logo:string='https://gallantize-organizer.s3.ap-south-1.amazonaws.com/gallantize.png';
}
