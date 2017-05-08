import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

@Component({ selector: 'app-search-bar', template: '' })
class AppSearchBarStubComponent { }

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('App: Pypicompare', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterStubComponent,
        AppSearchBarStubComponent,
        RouterOutletStubComponent
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
      });
  }));

  it('should create the app', () => {
    expect(comp).toBeDefined();
  });
});
