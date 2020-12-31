import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    data: {
      meta: {
        title: 'GALLERY.PAGE_TITLE',
        description: 'GALLERY.META_DESCRIPTION',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
