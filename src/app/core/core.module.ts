import { Injector, NgModule, PLATFORM_ID } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLoader, ConfigModule, ConfigService } from '@ngx-config/core';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { configFactory } from './factories/config.factory';
import { documentFactory } from './factories/document.factory';
import { metaFactory } from './factories/meta.factory';
import { windowFactory } from './factories/window.factory';
import { DOCUMENT, WINDOW } from './constants';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { translateBrowserLoaderFactory } from './translate-loaders/translate-browser.loader';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../layout/header/header.component';
import { MainComponent } from '../layout/main.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SplashScreenService } from './providers/splash-screen.service';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { buildIconLibrary } from './icons-library';
import { NgwWowModule } from 'ngx-wow';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configFactory,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
    SharedModule,
    FontAwesomeModule,
    NgwWowModule,
    NgxMasonryModule,
  ],
  providers: [
    {
      provide: DOCUMENT,
      useFactory: documentFactory,
      deps: [PLATFORM_ID],
    },
    {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [PLATFORM_ID],
    },
  ],
})
export class CoreModule {
  constructor(
    private readonly injector: Injector,
    private readonly library: FaIconLibrary
  ) {
    this.injector.get<SplashScreenService>(SplashScreenService);
    buildIconLibrary(this.library);
  }
}
