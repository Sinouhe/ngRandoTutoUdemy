import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {HikeService} from './hike.service';
import { Hike } from "./Hike";

@Component({
    moduleId: module.id,
    templateUrl: 'hike-details.component.html'
})
export class HikeDetailComponent implements OnInit{

    title: string;
    hike: Hike;

    constructor(private _route: ActivatedRoute, private _router: Router, private hikeService: HikeService) {

    }

    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        this.title = `Détail de la rendonnée ${id}`;
        this.hike = this.hikeService.getHikeByID(parseInt(id));
    }

    goBack(){
        //console.log("j'ai été clcké");
        this._router.navigate(['/hikes']);
    }


}