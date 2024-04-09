import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent {

  constructor(private router:Router){}
  readonly cards:any = [
    {
      title: 'Play Station Controller',
      description: 'Developed By Sony which cost you $5500',
      
      buttonText: 'Button',
      img: 'assets/images/con.jpeg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    {
      title: 'XBox Controller',
      description: 'Developed By Microsoft which cost you $5600',
      buttonText: 'Button',
      img: 'assets/images/71gFBUbZTAL.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      
      }
    },
    {
      title: 'Nintendo Controller',
      description: 'Developed By Nintendo which cost you $5650',
      buttonText: 'Button',
      img: 'assets/images/71cHzZOim0L.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      
      }
    },
    
    
  ];
}
