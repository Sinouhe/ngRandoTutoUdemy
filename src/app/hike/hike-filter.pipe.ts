import { Pipe, PipeTransform } from "@angular/core";
import { Hike } from "./Hike";

@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {

    transform(value: Hike[], searchTerm: string = '') {
        if(searchTerm !== ''){
            let retour = value.filter((hike: Hike) => {
                return (hike.description.toLocaleLowerCase().includes(searchTerm) || hike.name.toLocaleLowerCase().includes(searchTerm));
            });
            return retour
        }else{
            return value;
        }
    }

}