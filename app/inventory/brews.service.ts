import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Brew} from '../coffee/brew.component';

@Injectable()
export class BrewService {
    private brewsUrl = 'http://localhost/CoffeeData/CoffeeRest.svc/brews';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getBrews(): Observable<Brew[]>{
        return this.http.get(this.brewsUrl).map(this.extractData).catch(this.handleError);
    }

    update(brew: Brew): Promise<Brew> {
        var brewOne = {"brew": brew}
        console.log(brewOne);
        return this.http
          .put(this.brewsUrl, brewOne, {headers: this.headers})
          .toPromise()
          .then(() => brew)
          .catch(this.handleError);
    }

    add(brew: Brew): Promise<Brew> {
        var brewOne = {"brew": brew};
        return this.http
          .post(this.brewsUrl, brewOne, {headers: this.headers})
          .map(res => {console.log(res.json()); brew = res.json().AddBrewResult;})
          .toPromise()
          .then(() => brew)
          .catch(this.handleError)
    }

    delete(brew: Brew): Promise<Brew> {
        var brewOne = {"brew": brew};
        return this.http
          .delete(this.brewsUrl + "/" + brew.id)
          .toPromise()
          .then(() => brew)
          .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log('body', body);
      return body.GetBrewsResult || { };
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
