import { ConfigService } from '@ngx-config/core';
import { MetaStaticLoader } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

export const metaFactory = (
  config: ConfigService,
  translate: TranslateService
) =>
  new MetaStaticLoader({
    callback: (cur: string) => translate.get(cur),
    pageTitlePositioning: config.getSettings('seo.pageTitlePositioning'),
    pageTitleSeparator: config.getSettings('seo.pageTitleSeparator'),
    applicationName: config.getSettings('system.applicationName'),
    applicationUrl: config.getSettings('system.applicationUrl'),
    defaults: {
      title: config.getSettings('seo.defaultPageTitle'),
      description: config.getSettings('seo.defaultMetaDescription'),
      generator: 'SAGECO',
      'og:site_name': config.getSettings('system.applicationName'),
      'og:type': 'website',
      'og:locale': config.getSettings('i18n.defaultLanguage.culture'),
      'og:locale:alternate': config
        .getSettings('i18n.availableLanguages')
        .map((cur: any) => cur.culture)
        .toString(),
    },
  });
