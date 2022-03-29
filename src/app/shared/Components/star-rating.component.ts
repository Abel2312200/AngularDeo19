import { Component, Input, OnChanges, OnInit} from "@angular/core";

@Component({
  selector:'app-star-rating',
  templateUrl:'./star-rating.component.html',
  styleUrls:['./star-rating.component.css']
})

export class starRatingComponent implements OnChanges {
  public starWidth : number = 125;

  @Input()
  public startRating : number=5;

  ngOnChanges(){
    this.starWidth=this.startRating*125/5;
  }

}
