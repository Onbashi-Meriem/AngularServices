import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../models/emailModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // emailModels:EmailModel[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  // updateEmailList(event:any){
  //   this.emailModels=event.data
  //   console.log(event)
  //   console.log("home",this.emailModels)
  // }

}
