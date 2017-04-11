import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  packagesName: string [];
  data: string;

  constructor(private _router: Router) { }

  onClick(): void {
    if (this.data) {
      this._router.navigate(['/search'], {queryParams: {name: this.data}});
    }
  }

}
