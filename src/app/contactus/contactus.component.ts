import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact = {};
  contactFrmSubmitted = false;
  constructor(public http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }

  sendContactEmail(contactInfo){

    // console.log(contactInfo);
    this.http.post('http://localhost:8080/sendemail', contactInfo).subscribe((data:any)=>{
      // console.log(data);
      this.toastr.success('Email sent!');
    });
  }
}
