import { Injectable } from '@angular/core';
import { EmailModel } from '../models/emailModel';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailModels:EmailModel[]=[]

  constructor(private logService:LogService) { }

  add(email:string){

    let emailModel=new EmailModel();
    emailModel.email=email
    emailModel.date=Date()

    this.logService.addLog(email)

 this.emailModels.push(emailModel)
  }
}
