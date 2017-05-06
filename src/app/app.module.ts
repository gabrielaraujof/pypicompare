import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComparisonsModule } from './comparisons/comparisons.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from "app/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    ComparisonsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
