import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent {
  title = 'Pypicompare';
  content = 'Lorem Ipsum is simply dummy' +
  'text of the printing and typesetting' +
  'industry. Lorem Ipsum has been the' +
  'industry\'s standard dummy text ever' +
  'since the 1500s, when an unknown printer' +
  'into electronic typesetting, remaining' +
  'essentially unchanged. It was popularised' +
  'in the 1960s with the release of Letraset' +
  'sheets containing Lorem Ipsum passages,' +
  'and more recently with desktop publishing' +
  'of Lorem Ipsum.';
  footer = 'Copyright © 2017 - All Rights Reserved';
}
