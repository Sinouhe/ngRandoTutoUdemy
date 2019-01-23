import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Hike } from './hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import { parse } from "querystring";


@Injectable()
export class HikeService {

    private observable : Observable<any>;
    private data: any;
    private url : string = 'app/api/hikes.json';
    private ll : number = 1;

    constructor(private _http: Http) {
    }

    /*
    getHikes(){
        return this.hikes;
    }
    */

    getHikesFromApi(){
        return this._http.get(this.url)
            /*
            .do((x) => {
                console.log(x)
            })
            .map(hikes => hikes.json());
            */
            
            .do((x) => {
                console.log(x);
            })
            .map((hikes) => {
                return hikes.json();
            })
            
            
    }

    getHikesFromApiWithCache(){
        // verifie si données en caches
        if (this.data){
            //return this.observable.of(this.data);
            console.log("1");
            return of(this.data);
        // pas de data mais une requète en chemin
        }else if(this.observable){
            console.log("2");
            return this.observable;
        // sinon il faut charger les datas
        }else{
            console.log("3");
            this.observable = this._http.get(this.url)
                                        .map((hikes) => {
                                            this.data = hikes.json(); 
                                            return this.data 
                                        })
                                        .catch((err: any) => {
                                            return Observable.throw(err.message);
                                        });
            return this.observable;
        }
    }

    getHikeByID(id: number){
        if(this.data){
            const result = this.data.filter((element: any) => {
                return element.id === id
            });
            console.log(result);
            if (result.length > 0) {
                return result[0];
            }else{
                return undefined
            }
        }else{
            return undefined
        }
    }

}
