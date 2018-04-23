import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Offerslist } from './../configs/offers.config';

@Injectable()
export class OffersService {

constructor(private http: Http) { }

private headers = new Headers({ 'Content-Type': 'application/json'});

getOffers(){
  return this.http.get(Offerslist.getOfferlistUrl)
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}

getAddress(street,city,state,zip){
  console.log(city);
  return this.http.get(Offerslist.getAddressUrl+city+"&key="+"AIzaSyBeSuJbAPirjvZ0mEDxd-g05P5_f6gkAlQ")
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}

getProfile(){
  return this.http.get(Offerslist.getProfile)
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}



}
