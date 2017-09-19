import {Pipe, PipeTransform} from '@angular/core';
import {Coffee} from '../coffee/coffee.component';

@Pipe({
    name: 'coffeefilter',
    pure: false
})
export class CoffeeFilter implements PipeTransform {
    transform(items: Coffee[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        var lowerFilter = filter.toLowerCase();
        return items.filter(item => item.name.toLowerCase().includes(lowerFilter) || item.roaster.toLowerCase().includes(lowerFilter) || item.roast.toLowerCase().includes(lowerFilter))
    }

}