import {Injectable} from '@angular/core';

@Injectable()
export class InventoryService {
    constructor() {}

    getCoffees() {
        return [
            {name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5},
            {name: 'Toasted Southern Pecan', roaster: 'The Grind', roast: 'light', amount: 5}
        ]
    }
}
