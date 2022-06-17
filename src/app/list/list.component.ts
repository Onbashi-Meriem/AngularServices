import { Component, OnInit ,Input} from '@angular/core';
import { EmailModel } from '../models/emailModel';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @Input() emailList:EmailModel[]=[]
  emailList:EmailModel[]=[]

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
    this.emailList=this.emailService.emailModels
  }

}
