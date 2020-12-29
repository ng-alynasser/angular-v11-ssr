import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ConfigService } from '@ngx-config/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../core/models/language.model';
import { I18NService } from '../core/providers/i18n.service';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';

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
    private readonly wowService: NgwWowService
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

  get currentLanguage(): string {
    return this.translate.currentLang;
  }

  get availableLanguages(): Language[] {
    return this.config.getSettings('i18n.availableLanguages');
  }

  toggleLanguage(language: Language): void {
    this.translate.use(language.code).subscribe(() => {
      this.meta.updateTag({
        name: 'og:locale',
        content: this.translate.instant(language.culture),
      });
    });
  }
}
