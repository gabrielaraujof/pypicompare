import { Component, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.scss']
})
export class SearchBarComponent {
  @HostBinding('class.editing') editingMode = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  query: string;

  constructor(private _router: Router) { }

  search(): void {
    if (this.query) {
      this._router.navigate(['/search'], { queryParams: { name: this.arrayfying(this.query) } });
    }
  }

  clearSearch(): void {
    this.query = '';
  }

  enterEditingMode(): void {
    this.editingMode = true;
  }

  exitEditingMode(): void {
    this.editingMode = false;
  }

  removeFocus(): void {
    this.searchInput.nativeElement.blur();
  }

  arrayfying(fullQuery: string): Array<string> {
    return fullQuery.split(',').map(query => query.trim());
  }
}
