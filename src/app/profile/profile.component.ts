import { Component } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

 
  constructor(private ts:TestService){}
  person=this.ts.person

  mobilenumber=this.ts.loginData.mobilenumber
  yourname=this.ts.loginData.yourname
  Address=this.ts.loginData.Address
  email=this.ts.loginData.email
  


}
