import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmailModel } from '../models/emailModel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  emailModels:EmailModel[]=[]
  // email:string
@ViewChild('emailInput') email:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addEmail(){
    let emailModel=new EmailModel();
    console.log(this.email.nativeElement.value)
    emailModel.email=this.email.nativeElement.value
    emailModel.date=Date()

    this.emailModels.push(emailModel)
    console.log(this.emailModels)
  }

}
