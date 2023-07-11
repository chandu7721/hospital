import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InsertedSuccess, Read,appoint,UniqueConstraintError,} from '../student-details';
import { CRUDService } from '../curd.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  ngOnInit(): void {}
  Subscription: Subscription = new Subscription();
  constructor(private Service: CRUDService, private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: appoint = {
    full_name:'',
    email: '',
    phone:'',
    dob:'',
    gender:'',
    a_date:'',
    a_time:'',
    aadhar:'',
    problem:'',
    city:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
  
  User: appoint = {
    full_name:'',
    email: '',
    phone:'',
    dob:'',
    gender:'',
    a_date:'',
    a_time:'',
    aadhar:'',
    problem:'',
    city:''
  };
  
  Results = [];
 
  a=[];

  Read(){
    this.clicked=true;
   
    this.Subscription=this.Service.Read(this.User.full_name).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];
          this.retrive=true;
         
          this.User = {
            full_name:this.a[0] ,
            email:this.a[1],
            phone:this.a[2],
            dob:this.a[3],
            gender:this.a[4],
            a_date:this.a[5],
            a_time:this.a[6],
            aadhar:this.a[7],
            problem:this.a[8],
            city:this.a[9],
          
            };
            }
        else{
       alert("can't update");
        }
      }
    )
}

Update(){
  this.ErrorMsg='';
  this.SuccessMsg='';
  this.Subscription=this.Service.Update(this.User.email,this.User).subscribe(
    (data:any)=>{
      if(data){
      
        this.SuccessMsg = `${this.User.email} updated sucessfully`;
      }
      else{
        this.ErrorMsg = `${this.User.email} No record Found`;
      }

    }
  )}
  }
