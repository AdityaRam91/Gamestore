import { Component } from '@angular/core';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent {


text:string="";
email:string="";
password:string="";

singup(): void{
  console.log(this.text)
}

singin(): void{
  console.log(this.text)
}




}

