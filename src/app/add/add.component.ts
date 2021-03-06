import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmailModel } from '../models/emailModel';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  emailModels:EmailModel[]=[]
@ViewChild('emailInput') email:ElementRef;
@Output() myEvent:EventEmitter<any>=new EventEmitter()

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }

  addEmail(){
    // let emailModel=new EmailModel();
    // // console.log(this.email.nativeElement.value)
    // emailModel.email=this.email.nativeElement.value
    // emailModel.date=Date()

    // this.emailModels.push(emailModel)

    this.emailService.add(this.email.nativeElement.value)
    this.email.nativeElement.value=''
    // console.log(this.emailModels)

    // this.myEvent.emit({data:this.emailModels})
  }

}
