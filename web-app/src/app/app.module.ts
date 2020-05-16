import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* Routing */
import { AppRoutingModule } from './app-routing.module';


/* Components */
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@sharedModule/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // ProjectModule,
    // IssueModule,
    // HomeModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule   // AppRoutingModule must be the last of this list because it has the default route setting like PageNotFound!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
