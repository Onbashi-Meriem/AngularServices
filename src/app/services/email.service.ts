import { Injectable } from '@angular/core';
import { EmailModel } from '../models/emailModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailModels:EmailModel[]=[]

  constructor() { }

  add(email:string){

    let emailModel=new EmailModel();
    emailModel.email=email
    emailModel.date=Date()


 this.emailModels.push(emailModel)
  }
}
