import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  register(userObj){
    return this._http.post('/register', userObj)
    .map(Response=>Response.json()).toPromise();
  }

  login(loginObj){
    return this._http.post('/login', loginObj)
    .map(Response=>Response.json()).toPromise();
  }

  getRandomBike(){
    return this._http.get('/randomBike')
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentUser(){
    return this._http.get('/home')
    .map(Response=>Response.json()).toPromise();
  }

  create(createObj){
    return this._http.post('/home/create', createObj)
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentListings(){
    return this._http.get('/home/getCurrentListings')
    .map(Response=>Response.json()).toPromise();
  }

  deleteBike(bikeId){
    return this._http.post('/home/deleteBike', {bikeId:bikeId})
    .map(Response=>Response.json()).toPromise();
  }

  update(updateObj){
    return this._http.post('/home/update', updateObj)
    .map(Response=>Response.json()).toPromise();
  }

  getAllListings(){
    return this._http.get('/home/getAllListings')
    .map(Response=>Response.json()).toPromise();
  }

  contact(uId){
    return this._http.post('/home/contact', {uId:uId})
    .map(Response=>Response.json()).toPromise();
  }

  logOut(){
    return this._http.get('/home/logOut')
    .map(Response=>Response.json()).toPromise();
  }

}
