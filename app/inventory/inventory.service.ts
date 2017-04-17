import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Coffee} from '../coffee/coffee.component';

@Injectable()
export class InventoryService {
    private coffeesUrl = 'http://localhost/CoffeeData/CoffeeRest.svc/coffees';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getCoffees(): Observable<Coffee[]>{
        return this.http.get(this.coffeesUrl).map(this.extractData).catch(this.handleError);
    }

    update(coffee: Coffee): Promise<Coffee> {
        var coffeeOne = {"coffee": coffee}
        console.log(coffeeOne);
        return this.http
          .put(this.coffeesUrl, coffeeOne, {headers: this.headers})
          .toPromise()
          .then(() => coffee)
          .catch(this.handleError);
    }

    add(coffee: Coffee): Promise<Coffee> {
        var coffeeOne = {"coffee": coffee};
        return this.http
          .post(this.coffeesUrl, coffeeOne, {headers: this.headers})
          .toPromise()
          .then(() => coffee)
          .catch(this.handleError)
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log('body', body);
      return body.GetCoffeesResult || { };
    }

    private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
