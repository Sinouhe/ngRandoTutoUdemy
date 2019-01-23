import { Component } from "@angular/core";
import { Hike } from './Hike';
import { HikeService } from './hike.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list.component.html'
})
export class HikeListComponent {

    hikes: Hike[];
    searchTerm: string;
    
    constructor(private _hikeService: HikeService){
      
    }

    addToMyToDoHike(hikeToAdd: Hike){
      console.log("from hike-list.component.ts" + JSON.stringify(hikeToAdd));
    }

    ngOnInit(){
        //this.hikes = this._hikeService.getHikes();
        /*
        //avant la mise en cache
        this._hikeService.getHikesFromApi()
                            .subscribe((res) => {
                              console.log(res)
                              this.hikes = res;
                            },(err) => {
                              console.log(err.message);
                            })
        */
        // pour la version mise en cache
        this._hikeService.getHikesFromApiWithCache()
                      .subscribe((res) => {
                        console.log(res)
                        this.hikes = res;
                      },(err) => {
                        console.log(err.message);
                      })
        console.log(this.hikes);
      }
      

}