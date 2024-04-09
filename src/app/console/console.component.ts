import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent {
  
  

  readonly cards:any = [
    {
      title: 'Play Station',
      description: 'Developed By Sony which cost you $8000',
      buttonText: 'Button',
      img: 'assets/images/playstation.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      
      }
    },
    {
      title: 'XBox',
      description: 'Developed By Microsoft which cost you $8500',
      buttonText: 'Button',
      img: 'assets/images/xbox.jpeg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    {
      title: 'Nintendo',
      description: 'Developed By Nintendo which cost you $85550',
      buttonText: 'Button',
      img: 'assets/images/all-nintendo-characters-vh0t41755tz8cr0x.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    
  ];

  constructor(private ts:TestService,private router:Router){}
 

}
