import { Component } from '@angular/core';
import {OffersService} from './services/offers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[OffersService]
})
export class AppComponent {
  title = 'app';

  lat: number;
  lng: number;
  constructor(private offersService: OffersService) { }

 priceAfterDiscount: any;
 address:any;
 ngOnInit() {
   this.getProfile();
   this.getOfferlist();
   //this.initMap();
 }
 public offersList=[];

 productPrice(offerOriginalPrice,offerDiscount){
   this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
 }
 getOfferlist() {
   this.offersService.getOffers().subscribe((res) =>{
     debugger
     this.offersList = res;
     }, (error) =>{
     })
 }
 initMap(){
        console.log(this.city)
   this.offersService.getAddress(this.street,this.city,this.state,this.zip).subscribe((res) =>{

     this.address = res;
     this.lat=(this.address.results[0].geometry.location.lat);
     this.lng=(this.address.results[0].geometry.location.lng);
     }, (error) =>{
     })
   }
  data:any;
  street:string;
  city:string;
  zip:number;
  state:string;

  getProfile() {
      this.offersService.getProfile().subscribe((res) =>{
      this.data=res;
     this.street=this.data.shopAddress.street.toUpperCase();
     this.city=this.data.shopAddress.city.toUpperCase();
     this.zip=this.data.shopAddress.zipCode;
     this.state=this.data.shopAddress.state.toUpperCase();
     this.initMap();
     },(error) =>{
     })
}
}
