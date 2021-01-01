import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ConfigService } from '@ngx-config/core';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../core/providers/i18n.service';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import { Location } from '@angular/common';
import { WINDOW } from '../core/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(
    private readonly translate: TranslateService,
    private readonly i18NService: I18NService,
    private readonly config: ConfigService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly wowService: NgwWowService,
    @Inject(WINDOW) private readonly window: Window
  ) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.i18NService.init(
      this.config.getSettings('i18n.defaultLanguage'),
      this.config.getSettings('i18n.availableLanguages')
    );

    const onNavigationEnd$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    merge(this.translate.onLangChange, onNavigationEnd$)
      .pipe(
        map(() => {
          let currentRoute = this.route;
          while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
          }
          return currentRoute;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        tap(({ meta }) => {
          if (meta) {
            this.title.setTitle(this.translate.instant(meta.title));
            this.meta.updateTag({
              name: 'description',
              content: this.translate.instant(meta.description),
            });
          }
        })
      )
      .subscribe();
  }

  toggleLanguage(): void {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }
}
