import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppConfigService} from "./service/app-config.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

export function initConfigFactory(appConfig:any){
  console.log("Factory Loading....");
  return ()=> appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfigFactory,
      deps: [AppConfigService, HttpClient],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
