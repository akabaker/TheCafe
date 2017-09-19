import {Coffee} from '../coffee/coffee.component';
 
 export class Brew {
     id: number;
     coffeeId: number;
     coffee: Coffee;
     brewLength: string;
     brewedAt: string;
     brewNotes: string;
 }