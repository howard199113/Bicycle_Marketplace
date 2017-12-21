import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allListings: any[];
  userId: string;
  searchString: any;
  shownListings: any[];
  constructor(private _apiService:ApiService, private _router: Router) { }

  ngOnInit() {
    this.getAllListings();
    this.getCurrentUser();
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

  getAllListings(){
    this._apiService.getAllListings()
    .then((data)=>{
      console.log(data);
      this.allListings = data;
      this.shownListings = data;
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

  contact(uId){
    console.log('hit contact');
    console.log(uId);
    this._apiService.contact(uId)
    .then((data)=>{
      console.log(data);
      alert("Name: " + data.first_name + "\nEmail: " + data.email);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  searchScore(){
    console.log("hit searchScore", this.searchString);
    this.shownListings = this.allListings.filter((listing)=>{
      console.log(listing.description.includes(this.searchString));
      console.log(listing.title)
      return listing.description.toLowerCase().includes(this.searchString) || listing.title.toLowerCase().includes(this.searchString);

      // score.score.toString().includes(this.searchString);
    })
  }


}
