import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.scss']
})
export class ComponeComponent implements OnInit {
 selected:any;
 isValue=false;
  user: any;
  constructor(private appsevice: ContactService) {  }

  ngOnInit(): void {
  }
  Changed(){
    switch(this.selected) {
      case 'Single Account':
       this.isValue=false;
       this.appsevice.user.next(this.isValue);
        break;
      case 'Multi Account':
        this.isValue=true;
        this.appsevice.user.next(this.isValue);
        break;
        case 'Multi Account in Hand':
        this.isValue=true;
        this.appsevice.user.next(this.isValue);
          break;
    }
  }
  
  }


