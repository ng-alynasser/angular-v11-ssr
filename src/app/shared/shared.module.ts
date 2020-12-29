import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, LAYOUT_CONFIG } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

export const APP_LAYOUT_CONFIG = {
  addFlexToParent: true,
  addOrientationBps: false,
  disabledDefaultBps: false,
  disableVendorPrefixs: false,
  serverLoaded: false,
  useColumnBasisZero: false,
};

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    BidiModule,
    RouterModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: LAYOUT_CONFIG,
      useValue: APP_LAYOUT_CONFIG,
    },
  ],
})
export class SharedModule {}
