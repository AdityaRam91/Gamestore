import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
 city:string="Hyderabad";

 onkeyup(){
  console.log(this.city);
 }
 
style:object={
        height:'100%',
        width:'100%'
}
 
}
