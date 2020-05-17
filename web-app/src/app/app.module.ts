import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* Routing */
import { AppRoutingModule } from './app-routing.module';


/* Components */
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ProjectModule,

    
    HttpClientModule,
    RouterModule,
    AppRoutingModule   // AppRoutingModule must be the last of this list because it has the default route setting like PageNotFound!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
