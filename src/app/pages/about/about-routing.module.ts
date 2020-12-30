import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      meta: {
        title: 'ABOUT.PAGE_TITLE',
        description: 'ABOUT.META_DESCRIPTION',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
