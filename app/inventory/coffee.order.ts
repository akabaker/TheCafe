import {Pipe, PipeTransform} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';

@Pipe({
    name: 'coffeeorder',
    pure: false
})
export class CoffeeOrder implements PipeTransform {
    transform(items: Coffee[], orderBy: string): any {
        if (!items || !orderBy) {
            return items;
        }
        var lowerorder = orderBy.toLowerCase();
        if (lowerorder == 'name') {
            return items.sort((a, b) => a.name.localeCompare(b.name))
        }

        if (lowerorder == 'roaster') {
            return items.sort((a, b) => a.roaster.localeCompare(b.roaster))
        }

        if (lowerorder == 'roast') {
            return items.sort((a, b) => a.roast.localeCompare(b.roast))
        }

        return items;
        
    }
}