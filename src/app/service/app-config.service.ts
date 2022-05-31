import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  static settings: any;

  constructor(private httpClient: HttpClient) { }

  public load(){
    const configUrl = 'assets/config/properties.json';
    return new Promise<void>((resolve, reject) =>{
      this.httpClient.get(configUrl).subscribe(
        res=>{
        AppConfigService.settings = res;
        resolve();
      });
    } )
  }
}
