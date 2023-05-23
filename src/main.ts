


import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {AppRoutingModule} from "./app/app-routing.module";
import {importProvidersFrom} from "@angular/core";
// import {AnalyticsService} from "./app/shared/analytics.service";




bootstrapApplication(AppComponent,{
  providers:[
    // AnalyticsService,
    importProvidersFrom(AppRoutingModule)
  ]
})
