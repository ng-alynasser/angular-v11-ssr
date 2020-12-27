import { NgModule, PLATFORM_ID } from '@angular/core';
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
import { LocalStorageService } from './providers/local-storage.service';
import { DOCUMENT, WINDOW } from './constants';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { translateBrowserLoaderFactory } from './translate-loaders/translate-browser.loader';
import { I18NService } from './providers/i18n.service';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../layout/header/header.component';
import { MainComponent } from '../layout/main.component';
import { FooterComponent } from '../layout/footer/footer.component';

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
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [ConfigService, TranslateService],
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
    SharedModule,
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
    LocalStorageService,
    I18NService,
  ],
})
export class CoreModule {}
