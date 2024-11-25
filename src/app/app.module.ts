import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudetnsControllerComponent } from './studetns-controller/studetns-controller.component';
import { ProWalksComponent } from './pro-walks/pro-walks.component';

@NgModule({
  declarations: [
    AppComponent,
    StudetnsControllerComponent,
    ProWalksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
