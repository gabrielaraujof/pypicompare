import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from 'app/shared';

@NgModule({
    declarations: [
        SearchBarComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        FormsModule,
        SearchBarComponent
    ]
})
export class SharedModule {}
