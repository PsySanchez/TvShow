import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchShow'
})

export class ShowPipe implements PipeTransform{

    transform(items: any[], searchText: string){
         if(!items) return [];
         if(!searchText) return items;

        return items.filter(it =>{
            return it.name.toLowerCase().includes(searchText.toLowerCase())})
    }
}