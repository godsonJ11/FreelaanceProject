import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [{path:'sign-in',component:LoginComponent},
  {path:'',component:IndexComponent},
  {path:'sign-up',component:RegisterComponent}];
