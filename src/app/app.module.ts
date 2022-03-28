
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { hotelListComponent } from './Hotel-list/hotel-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { replaceComma } from './shared/pipes/replace-comma.pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { starRatingComponent } from './shared/Components/star-rating.component';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    hotelListComponent,
    replaceComma,
    starRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
