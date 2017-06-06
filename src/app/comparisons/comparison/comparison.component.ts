import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import 'rxjs/add/operator/switch';

import { PackageService, PypiPackage } from '../shared';

@Component({
  templateUrl: 'comparison.component.html',
  styleUrls: ['comparison.component.scss']
})
export class ComparisonComponent implements OnInit, OnDestroy {
  selectedPackages: Array<PypiPackage>;
  private _packagesSubscription: Subscription;

  constructor(private _packageService: PackageService,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._packagesSubscription = this._route.queryParams
      .map((params: Params) => {
        const queryPackages = params['packages'];
        if (queryPackages) {
          return this._packageService.getPackages(queryPackages);
        } else {
          return Observable.empty();
        }
      })
      .switch()
      .subscribe(fetchedPackages => this.selectedPackages = fetchedPackages);
  }

  ngOnDestroy(): void {
    this._packagesSubscription.unsubscribe();
  }
}
