import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any = {};
  constructor(private _apiService:ApiService, private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this._apiService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data;
      console.log(this.currentUser);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  logOut(){
    console.log('hit logOut')
    this._apiService.logOut()
    .then((data)=>{
      console.log(data.currentUserSession);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

}
