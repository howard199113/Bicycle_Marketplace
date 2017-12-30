import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

  createInfo: any = {imageURL:"", title:"", description:"", price:"", location:""};
  userId: string;
  currentBikes: any[];
  imgURL: any;

  constructor(private _apiService:ApiService, private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getCurrentListings();
  }

  create(){
    console.log('hit create');
    this._apiService.create(this.createInfo)
    .then((data)=>{
      console.log(data);
      location.reload()
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  getCurrentUser(){
    this._apiService.getCurrentUser()
    .then((data)=>{
      this.userId = data._id;
      console.log("this is current userId " + this.userId);
    })
    .catch((error)=>{
      console.log(error);
      this._router.navigate(['']);
    })
  }

  getCurrentListings(){
    console.log('hit getCurrentListings');
    this._apiService.getCurrentListings()
    .then((data)=>{
      this.currentBikes = data;
      console.log(this.currentBikes);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  deleteBike(id){
    console.log('hit deletebike');
    this._apiService.deleteBike(id)
    .then((data)=>{
      console.log(data);
      location.reload()
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  update(idx){
    console.log('update this bike index:', idx);
    console.log(this.currentBikes[idx]);
    this._apiService.update(this.currentBikes[idx])
    .then((data)=>{
      console.log(data);
      this._router.navigate(['/home']);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  loadImage(){
    console.log('hit loadImage', this.createInfo.imageURL);
  }

}
