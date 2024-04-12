import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent {
  
  
  constructor(private ts:TestService,private router:Router){}
 
  readonly cards:any = [
    {
      title: 'Play Station',
      description: 'Developed By Sony',
      buttonText: 'Button',
      img: 'assets/images/playstation.jpg',
      price:'8000',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
        this.ts.addtocart.push({title:this.cards[0].title,description:this.cards[0].description})
        // console.log(this.ts.addtocart)
        alert("Added to cart sucessfully")
      }
    },
    {
      title: 'XBox',
      description: 'Developed By Microsoft',
      buttonText: 'Button',
      img: 'assets/images/xbox.jpeg',
      price:'$8500',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
        this.ts.addtocart.push({title:this.cards[1].title,description:this.cards[1].description})
        // console.log(this.ts.addtocart)
      }
    },
    {
      title: 'Nintendo',
      description: 'Developed By Nintendo',
      buttonText: 'Button',
      img: 'assets/images/all-nintendo-characters-vh0t41755tz8cr0x.jpg',
      price:'$85550',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
        this.ts.addtocart.push({title:this.cards[2].title,description:this.cards[2].description})
        // console.log(this.ts.addtocart)
      }
    },
    
  ];

 
  // addtocart(){

  // }

}
