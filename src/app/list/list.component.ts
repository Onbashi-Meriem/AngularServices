import { Component, OnInit ,Input} from '@angular/core';
import { EmailModel } from '../models/emailModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() emailList:EmailModel[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
