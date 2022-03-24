import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
@Component({
  selector:'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class hotelListComponent implements OnInit{
  public title = 'Liste des hotels';

  //Liste des hiotels afficher par defaut

  public hotels :IHotel[]=[
    {
      idHotel : 1,
      nomHotel:'Bassam hotel',
      description:'Bellle vuesur la mre',
      price:200,
      imageUrl:'assets/imageHotels/hotel1.jpg'
    },
    {
      idHotel : 2,
      nomHotel:'Bas lagunaire',
      description:'profite de la vie mon potre',
      price:200,
      imageUrl:'assets/imageHotels/hotel2.jpeg'
    },
    {
      idHotel : 1,
      nomHotel:'Pardon Viens kiffer',
      description:'Certifié meilleur hotel depuis 2020',
      price:200,
      imageUrl:'assets/imageHotels/hotel3.jpg'
    }
  ];

  // condition pour  afficher les badges
  public showNouveau=false;

  // mot par defaut dans le filtre
  private _hotelFilter="hotel";

  //liste hotels filtrés
  public  filteredHotels : IHotel[]=[];


  public ngOnInit(): void {
    this.filteredHotels=this.hotels;
  }

  // methode pour changer condition d'affiche des badges
  public afficher():void{
    this.showNouveau=!this.showNouveau;
  }

  // definition des getters et setters
  public get hotelFilter():string{
    return this._hotelFilter;
  }

  public set hotelFilter(info:string){
    this._hotelFilter=info;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this._hotelFilter) : this.hotels;
  }
  private filterHotels(mot:string):IHotel[]{
    mot=mot.toLocaleLowerCase();
    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.nomHotel.toLocaleLowerCase().indexOf(mot) != -1
    );
    return res;
  }
}
