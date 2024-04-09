import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';
import { MainComponent } from './main/main.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsoleComponent } from './console/console.component';
import { ControllersComponent } from './controllers/controllers.component';
import { GamesComponent } from './games/games.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path:"",component:MainComponent
  },
  {
    path:"sample",component:SampleComponent
  },
  {
    path:"loginregister",component:LoginregisterComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"console",component:ConsoleComponent
  },
  {
    path:"Controllers",component:ControllersComponent
  },
  {
    path:"games",component:GamesComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"nav",component:NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
