import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GeneralModule} from './general/general.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routing module
    AppRoutingModule,
    //user defined module
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
