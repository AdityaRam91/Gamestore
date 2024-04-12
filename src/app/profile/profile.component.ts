import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

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

  constructor(private ts:TestService,private router: Router){}
  // person=this.ts.person

  mobilenumber=this.ts.loginData.mobilenumber
  yournamee=this.ts.loginData.yourname
  Address=this.ts.loginData.Address
  email=this.ts.loginData.email
  id1=this.ts.loginData.id
  Password1=this.ts.loginData.password

  ConfirmPassword1=this.ts.loginData.ConfirmPassword

  ngOnInit(): void {
    this.getformdetails();
    
   }
  
   getformdetails(){
    this.ts.getForm().subscribe(
      (loginData)=>{
        this.formData=loginData
       // console.log(this.formData);  
      },
     )
   }
   deleteData(){
    this.ts.deleteData(this.id1).subscribe((res:any)=>{
      this.getformdetails()
      this.ts.loginData.mobilenumber=""
      this.ts.loginData.yourname=""
      this.ts.loginData.Address=""
      this.ts.loginData.email=""
      this.ts.loginData.id=""
      this.ts.loginData.Password=""
      this.ts.loginData.ConfirmPassword=""
      this.ts.addtocart=null
      let link=['/register'];
      this.router.navigate(link);
    })
  
   }
  
   loginout(){

    if(this.ts.loginData.mobilenumber!="" && this.ts.loginData.Password!=""){
      this.ts.loginData.mobilenumber=""
      this.ts.loginData.yourname=""
      this.ts.loginData.Address=""
      this.ts.loginData.email=""
      this.ts.loginData.id=""
      this.ts.loginData.Password=""
      this.ts.loginData.ConfirmPassword=""
      this.ts.count=true
      this.ts.addtocart=null
      let link=['/login'];
      this.router.navigate(link);
    }
   
   }
  
  
   EditForm(){
   this.showForm=true
   this.Ename=this.yournamee
   this.EAddress=this.Address
   this.EConfirmPassword=this.ConfirmPassword1
   this.EPassword=this.Password1
   this.Eemail=this.email
   this.Emobilenumber=this.mobilenumber 
   this.id=this.id1
  
   }
   closeForm(){
   this.showForm=false
  //  console.log("hello");
   
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


}
