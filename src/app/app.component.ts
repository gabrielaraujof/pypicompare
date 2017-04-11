import { Component, ViewEncapsulation } from '@angular/core';
import { PackageService } from 'app/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PackageService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
