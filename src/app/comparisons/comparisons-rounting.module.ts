import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComparisonsComponent } from './comparisons.component';
import { ComparisonComponent } from './comparison/comparison.component';

const comparisonsRoutes: Routes = [
  {
    path: 'search',
    component: ComparisonsComponent,
    children: [
      { path: '', component: ComparisonComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(comparisonsRoutes)
  ],
  exports: [RouterModule]
})
export class ComparisonsRoutingModule { }
