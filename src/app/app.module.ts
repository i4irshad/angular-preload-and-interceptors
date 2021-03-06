import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import {
  declarations,
  httpInterceptorProviders,
  OptInPreloadStrategy,
  OnDemandPreloadStrategy,
} from './core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, declarations],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppStoreModule,
    externalModules,
    RouterModule.forRoot(
      routes,

      {
        // enableTracing: true,
        preloadingStrategy: OnDemandPreloadStrategy,
      }
    ),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
