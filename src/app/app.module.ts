import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { HikeDetailComponent } from './hike/hike-details.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { contactModule } from './contact/contact.module';
import { MapModule } from './map/map.module';
import { MapComponent } from './map/map.component';





@NgModule({
  imports:      [ BrowserModule, 
                  HikeModule, 
                  HttpModule, 
                  HomeModule,
                  contactModule, 
                  MapModule,
                  RouterModule.forRoot([
                    {path: 'home', component: HomeComponent},
                    {path: 'hikes', component: HikeListComponent},
                    {path: 'hike/:id', component: HikeDetailComponent},
                    {path: 'contact', component: ContactUsComponent},
                    {path: 'map', component: MapComponent},
                    {path: '', redirectTo: 'home', pathMatch: 'full'},
                    {path: '**', component: PageNotFoundComponent}
                  ])],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
