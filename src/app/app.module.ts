import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { hotelListComponent } from './Hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    hotelListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
