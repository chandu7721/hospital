import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../curd.service';
import { InsertedSuccess, Read, appoint } from '../student-details';

@Component({
  selector: 'app-read',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService) {}
  Roll: String = '';
  email : String='';
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
  Delete(Roll: String) {
    this.Service.Delete(Roll).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}
