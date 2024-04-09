import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestService } from './test.service';
import { ProfileComponent } from './profile/profile.component';
import {  HttpClientModule } from '@angular/common/http';
import { ConsoleComponent } from './console/console.component';
import { GamesComponent } from './games/games.component';
import { ControllersComponent } from './controllers/controllers.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    SampleComponent,
    LoginregisterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ConsoleComponent,
    GamesComponent,
    ControllersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
