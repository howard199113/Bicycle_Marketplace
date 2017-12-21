import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  newUser: any = {first_name:"", last_name:"", email:"", password:"", confirm_password:""};
  PassError: any = {message:""};
  takenEmail: any = {message:""};
  loginInfo: any = {email:"", password:""};
  logMessage: any = {message:""};
  randomBike: any
  constructor(private _apiService:ApiService, private _router: Router) { }

  ngOnInit() {
    this.getRandomBike();
  }

  register(){
    if(this.newUser.password != this.newUser.confirm_password){
      this.PassError.message = "Passwords must match!";
    }else{
      console.log(this.newUser);
      this._apiService.register(this.newUser)
      .then((data)=>{
        if(data == true){
          console.log(data);
          this._router.navigate(['/home']);
        }else{
          console.log(data);
          this.takenEmail.message = data;
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  login(){
    console.log('hit login');
    this._apiService.login(this.loginInfo)
    .then((data)=>{
      if(data == true){
        console.log(data);
        this._router.navigate(['/home']);
      }else{
        console.log(data);
        this.logMessage.message = data;
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  getRandomBike(){
    console.log('hit getRandomBike');
    this._apiService.getRandomBike()
    .then((data)=>{
      console.log(data);
      this.randomBike = data;
    })
    .catch((error)=>{
      console.log(error);
    })
  }

}
