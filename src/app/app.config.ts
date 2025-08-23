import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authTokenInterceptor} from '@app/interceptors/auth-token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
  ]
};
