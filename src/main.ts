import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { APP_ROUTES } from './app/routes';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      CommonModule,
      BrowserModule,
      LoggerModule.forRoot({
        level: NgxLoggerLevel.TRACE,
        disableConsoleLogging: false,
        serverLogLevel: NgxLoggerLevel.ERROR,
      })
      // StoreModule.forRoot(reducer),
      // EffectsModule.forRoot(),
      // StoreDevtoolsModule.instrument(),
    ),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LegacyInterceptor,
    //   multi: true,
    // },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  ],
}).catch((err) => console.error(err));
