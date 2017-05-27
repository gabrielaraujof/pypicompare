import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switch';

import { PackageService, PypiPackage } from '../shared';

@Component({
  templateUrl: 'comparison.component.html'
})
export class ComparisonComponent implements OnInit {
  packagesResult: Observable<PypiPackage[]>;

  constructor(private _packageService: PackageService,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.packagesResult = this._route.queryParams
      .map((params: Params) => {
        const queryPackages = params['packages'];
        if (queryPackages) {
          return this._packageService.getPackages(queryPackages);
        } else {
          return Observable.empty();
        }
      })
      .switch();
  }
}
