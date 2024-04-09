import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router) {  }

  ngOnInit(): void { }

  style:object={
    padding:0,
    border:0
  }

  register(){
   let link=['/register'];
   this.router.navigate(link);
  }
  profile(){
    let link=['/profile'];
   this.router.navigate(link);
  }

  onChange(event: any){
    console.log(event.value);
  }
  
}
