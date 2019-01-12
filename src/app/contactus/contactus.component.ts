import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact:any = {"name":""};
  contactFrmSubmitted = false;

  constructor(public http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }

  sendContactEmail(contactInfo){

    this.http.post('http://localhost:8080/sendemail', contactInfo).subscribe((data:any)=>{
      this.contact.name = "";
      this.contact.email = "";
      this.contact.subject = "";
      this.contact.message = "";
      this.contactFrmSubmitted = false;
      this.toastr.success('Email sent!');
    });
  }
}
