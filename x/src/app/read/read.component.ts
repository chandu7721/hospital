import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../curd.service';
import {
  InsertedSuccess,
  Read,
   appoint
} from '../student-details';

@Component({
  selector: 'read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private Service: CRUDService) {}
  email: String = '';
  Roll: String='';
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
  Results = [];
  Read(email: String) {
    this.Service.Read(email).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
        
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Delete(email: String) {
    this.Service.Delete(email).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  Update(email: String, Details: appoint) {
    this.Service.Update(email, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
}