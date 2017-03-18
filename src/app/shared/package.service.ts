import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { PypiPackage } from './package.model';

@Injectable()
export class PackageService {
  private pypiUrl = 'http://pypi.python.org/pypi';

  constructor(private http: Http) { }

  getPackages(packages: Array<string>): Observable<PypiPackage> {
    let packageObservables = packages.map((packageName: string) => {
      return this.http.get(`${this.pypiUrl}/${packageName}/json`);
    });

    return Observable.merge(...packageObservables)
      .map((res: Response) => <PypiPackage>res.json())
      .catch(this.handleError);
  }

  private handleError(error) {
    let msg = `Status code {error.status} on url {error.url}`;
    console.error(msg);
    return Observable.throw(msg);
  }

}
