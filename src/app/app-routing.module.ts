import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComparisonsComponent } from './comparisons/comparisons.component';
import { ComparisonsModule } from './comparisons/comparisons.module';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    ComparisonsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
