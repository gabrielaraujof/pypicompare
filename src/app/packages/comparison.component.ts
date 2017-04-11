import { Component, OnInit } from '@angular/core';
import { PackageService, PypiPackage } from 'app/shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'comparison.component.html'
})
export class ComparisonComponent implements OnInit {
    packagesName: string [];
    packagesResult: PypiPackage ;
    errorMessage: string;
    params: string;

    constructor(private _packageService: PackageService,
                private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        this._router.routerState
            .root
            .queryParams
            .subscribe(data => {
                this.params = data['name'];
                this.getPackages();
            });
    }

    /**
     * Method calls service to get data of api.
     * @param data
     */
    getPackages(): void{
        this._packageService.getPackages([this.params])
            .subscribe(
                packages => this.packagesResult = packages,
                erro => this.errorMessage = erro
            );
    }

}
