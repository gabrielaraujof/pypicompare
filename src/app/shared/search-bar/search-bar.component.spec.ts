import { Router } from '@angular/router';
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { SharedModule } from '../shared.module';
import { SearchBarComponent } from './search-bar.component';

class RouterStub {
  navigate(commands: any[], extras?: any) {}
}

let comp: SearchBarComponent;
let fixture: ComponentFixture<SearchBarComponent>;

describe('Component: SearchBar', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchBarComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should create an instance', () => {
    expect(comp).toBeDefined();
  });
});
