import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
    imports: [
            BrowserModule,
            CommonModule,
            FormsModule,
            AgmCoreModule.forRoot({
               apiKey: 'API KEY'
            })
        ],
    providers: [],
    declarations: [MapComponent]
})
export class MapModule{
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
}