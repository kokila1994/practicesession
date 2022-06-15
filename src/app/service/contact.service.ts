import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(httpclient:HttpClient) {
   }
   public user = new BehaviorSubject<any>(false);
 

 
  //  editUser(isValue: any){
  //     this.user.next(isValue); 
   
  //  }
  }

