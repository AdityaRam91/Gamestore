import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // count:boolean=false;
  constructor(private router: Router,private ts:TestService) {  }

  
  ngOnInit(): void { }

  style:object={
    padding:0,
    border:0
  }

  register(){
    if(this.ts.count){
      let link=['/register'];
      this.router.navigate(link);
      this.ts.count=false
    }
    else{
      alert("you logged in");
    }
   
  }
  profile(){
    let link=['/profile'];
   this.router.navigate(link);
  }

  cart(){
    let link=['/cart'];
   this.router.navigate(link);
  }

  onChange(event: any){
    console.log(event.value);
  }
  
}
