import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  socialItems = [
    {url: 'https://www.facebook.com', name: 'Facebook'},
    {url: 'https://www.instagram.com', name: 'Instagram'},
    {url: 'https://www.twitter.com', name: 'Twitter'}
  ];
  pageItems = [
    {url: 'https://www.python.org/', name: 'Python'},
    {url: 'https://pypi.python.org/pypi', name: 'PyPI'},
    {url: 'https://www.pycon.org/', name: 'PyCon'}
  ];
}
