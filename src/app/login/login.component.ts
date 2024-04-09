import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit,OnChanges,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges,AfterViewInit,AfterContentInit,AfterContentInit,AfterContentChecked,AfterViewChecked {
  constructor(private ts:TestService,private router: Router){}
  mp:string=""
  person=this.ts.person
  Formdata:any;
  mobilenumber:any;
  Password:any;
  
  onlogin(f:NgForm){
    this.mobilenumber=f.value.text;
    this.Password=f.value.Password;
    this.ts.getForm().subscribe({
      next:(res)=>{
        this.Formdata=res
        const data=this.Formdata.find((obj:any)=>obj.mobilenumber==this.mobilenumber && obj.Password==this.Password);
        console.log(data);
 
        if(data){
          this.ts.loginData=data
          let link=['/nav'];
          this.router.navigate(link);
        }
        else{
          this.mp="mobilenumber or password  is incorrect"
        }
      },
      error:console.log
    })
    // console.log(f)
    // console.log(f.value.text);
    // console.log(this.ts.person[0].mobilenumber)
    // console.log(f.value.Password);
    // console.log(this.ts.person[0].Password);
    
 
  f.resetForm();

  
  }
  ngOnChanges() {
    console.log('Child - OnChanges called');
  }

  ngOnInit() {
    console.log('Child - OnInit called');
  }

  ngAfterContentInit() {
    console.log('Child - AfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('Child - AfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('Child - AfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('Child - AfterViewContent called');
  }

  ngOnDestroy() {
    console.log('Child - OnDestroy called');
  }
  }



