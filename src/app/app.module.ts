import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { httpRequestInterceptor } from './core/interceptors/http-request/http-request.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch(),
      withInterceptors([httpRequestInterceptor])
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
