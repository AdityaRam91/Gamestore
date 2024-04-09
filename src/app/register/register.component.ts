import { Component, OnInit } from '@angular/core';
import {  FormGroup, NgForm } from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 cp:string="";
 details:string="";
 yourname:string="";
 formData=null
 Ename:any="";
 Eemail:any="";
 EAddress:any="";
 Emobilenumber:any="";
 EPassword:any=""
 EConfirmPassword:any="";
  showForm=false;
  id:Number=0;



 constructor(private ts:TestService,private router:Router){}

 ngOnInit(): void {
  this.getformdetails();
  
 }

 getformdetails(){
  this.ts.getForm().subscribe(
    (data)=>{
      this.formData=data
     // console.log(this.formData);  
    },
   )
 }
 deleteData(id:number){
  this.ts.deleteData(id).subscribe((res:any)=>{
    this.getformdetails()
  })

 }



 EditForm(data:any){
 this.showForm=true
 this.Ename=data.yourname
 this.EAddress=data.Address
 this.EConfirmPassword=data.ConfirmPassword
 this.EPassword=data.Password
 this.Eemail=data.email
 this.Emobilenumber=data.mobilenumber 
 this.id=data.id

 }
 closeForm(){
 this.showForm=false
 console.log("hello");
 
 }

 savebutton() {
  let body = {
    yourname: this.Ename,
    email: this.Eemail,
    Address: this.EAddress,
    mobilenumber: this.Emobilenumber,
    Password: this.EPassword,
    ConfirmPassword: this.EConfirmPassword,
    id:this.id
  };

  this.ts.putData(this.id,body).subscribe(
    {
      next: (val: any) => {
        this.getformdetails();
      },
      error: (error: any) => {
        console.error('Error saving form:', error);
       
      }
    }
  );
}

 
 
  onregister(f:NgForm){
    console.log(f)
    
    
    if(f.value.yourname!="" && f.value.email!="" && f.value.Address!="" && f.value.mobilenumber!=""&& f.value.Password!=""&& f.value.ConfirmPassword!=""){
    if(f.value.Password==f.value.ConfirmPassword){
  
      // this.ts.person.push({yourname:f.value.yourname,email:f.value.email,
      //   Address:f.value.Address,mobilenumber:f.value.mobilenumber,
      //   Password:f.value.Password,ConfirmPassword :f.value.ConfirmPassword })
      
      this.ts.addForm({yourname:f.value.yourname,
        email:f.value.email,
        Address:f.value.Address,
        mobilenumber:f.value.mobilenumber,
        Password:f.value.Password,
        ConfirmPassword :f.value.ConfirmPassword }).subscribe({
          next:(val: any)=>{
            alert('Details added successfully')
          },
          error:(err:any)=>{
            console.log(err);
          }
        })
        this.ts.getForm().subscribe((data)=>{
          
            this.formData=data
          
        })
      console.log(this.ts.person)
      // this.ts.person.push({mobilenumber:f.value.mobilenumber})
      // this.ts.person.push({password:f.value.password})  
      //   let link=['/login']
      //  this.router.navigate(link)
      
    
    }
    else{
      this.cp="password and confirm password mismatched"
    }

  }
  else{
this.details="enter all details"
  }
  
  
  f.resetForm();
}
}
