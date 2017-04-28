import { NgModule } from '@angular/core';

import { ComparisonsRoutingModule } from './comparisons-rounting.module';
import { ComparisonsComponent } from './comparisons.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { HeaderComponent } from './header/header.component';
import { PackageService } from './shared';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComparisonsComponent,
    ComparisonComponent,
    HeaderComponent
  ],
  imports: [
    ComparisonsRoutingModule,
    SharedModule
  ],
  providers: [PackageService]
})
export class ComparisonsModule { }
