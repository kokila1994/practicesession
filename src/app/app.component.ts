import { Component,OnInit} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'http-put';
  formGroup="registerform";
  registerform: any;
  
  

  constructor(){

  }
  ngOnInit(){
    this.registerform=new FormGroup({
      'firstname':new FormControl('',[Validators.required]),
      'lastname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required]),
      'confirmpassword':new FormControl('',[Validators.required]),
      'dateofbirth':new FormControl('',[Validators.required]),
  
    });
 }

 get Firstname(){
  return this.registerform.get('firstname');

 }
 get Lastname(){
  return this.registerform.get('lastname');

 }
 get email(){
  return this.registerform.get('email');

 }
 get password(){
  return this.registerform.get('password');

 }
 get confirmpassword(){
  return this.registerform.get('confirmpassword');

 }
 get Dateofbirth(){
  return this.registerform.get('dateofbirth');

 }

 onsubmit(){
  console.log(this.registerform.value);
}
  









}
