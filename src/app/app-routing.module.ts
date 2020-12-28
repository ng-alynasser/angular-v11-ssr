import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { MainComponent } from './layout/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./pages/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./pages/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'choose-us',
        loadChildren: () =>
          import('./pages/choose-us/choose-us.module').then(
            (m) => m.ChooseUsModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./pages/gallery/gallery.module').then((m) => m.GalleryModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true,
      },
    },
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
