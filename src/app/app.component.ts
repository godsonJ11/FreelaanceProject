import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterOneComponent } from './register-one/register-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent,LoginComponent,RegisterComponent,RegisterOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
