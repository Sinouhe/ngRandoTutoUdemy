import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hike } from "./Hike";

@Component({
    moduleId: module.id,
    selector: "hike-summary",
    templateUrl: "hike-summary.component.html",
    // 2 lignes suivantes sont idem, 2 façon de faire
    //styles: ['a {text-decoration: none } a:hover {color: #999}']
    styleUrls: ["hike-summary.component.css"]
})
export class HikeSummaryComponent{

    @Input() hike: Hike;
    @Output() addHikeAsFavorite = new EventEmitter<Hike>(); 

    toggleAsTodoHike(isAdded : boolean){
        //console.log(isAdded)
        if (isAdded){
            this.addHikeAsFavorite.emit(this.hike);
        }
    }

}