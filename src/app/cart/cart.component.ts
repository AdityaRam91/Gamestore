import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ts:TestService,private router:Router){}
  title:any;
  description:any;
  data=this.ts.addtocart
   
  

  ngOnInit(): void {
      console.log(this.data)
  }
  


  Placeorder(){
    alert("Order Placed")
  }
}
