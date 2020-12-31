import { NgModule } from '@angular/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryHeaderComponent } from './components/gallery-header/gallery-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [GalleryComponent, GalleryHeaderComponent],
  imports: [
    SharedModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    LightboxModule,
  ],
})
export class GalleryModule {}
