import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.scss']
})
export class ComptwoComponent implements OnInit {
render:any;
name="Satish"
  user: any;
  isValue: any;
  constructor(private appsevice: ContactService) { }

  ngOnInit(): void { 
    this.appsevice.user.subscribe(user => this.user = user);
  }
 
}
