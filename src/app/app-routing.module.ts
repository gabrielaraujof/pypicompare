import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { ComparisonComponent } from 'app/packages/comparison.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'search', component: ComparisonComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', redirectTo: 'home', pathMatch: 'full'}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
