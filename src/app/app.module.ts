import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import { AppComponent } from './app.component';
import { hotelListComponent } from './Hotel-list/hotel-list.component';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    hotelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
