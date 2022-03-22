import { Component } from "@angular/core";


@Component({
  selector:'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class hotelListComponent{
  public title = 'Liste des hotels';
  public hotels : any[]=[
    {
      idHotel : 1,
      nomHotel:'Mougon Pan',
      description:'Bellle vuesur la mre',
      price:200,
      imageUrl:'assets/imageHotels/hotel1.jpg'
    },
    {
      idHotel : 2,
      nomHotel:'mougon douce an',
      description:'Bellle vgysgihe',
      price:200,
      imageUrl:'assets/imageHotels/hotel2.jpeg'
    },
    {
      idHotel : 1,
      nomHotel:'Mougon Pan',
      description:'Bellle vuesur la mre',
      price:200,
      imageUrl:'assets/imageHotels/hotel3.jpg'
    }
  ];
}
