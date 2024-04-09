import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private router:Router){}
  readonly cards:any = [
    {
      title: 'Gow',
      description: 'Developed By Sony which cost you $1000',
      buttonText: 'Button',
      img: 'assets/images/god-of-war-83rush6v76r4v0ul.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    {
      title: 'Minecraft',
      description: 'Developed By Microsoft which cost you $1500',
      buttonText: 'Button',
      img: 'assets/images/minecraft-background-cfljc4haleghnajo.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    {
      title: 'Nintendo mario',
      description: 'Developed By Nintendo which cost you $1550',
      buttonText: 'Button',
      img: 'assets/images/222eb91581f6752021b2d4af353c0f65.jpg',
      onclick:()=>{
        let link = ['/cart'];
        this.router.navigate(link);
      }
    },
    
  ];
}
