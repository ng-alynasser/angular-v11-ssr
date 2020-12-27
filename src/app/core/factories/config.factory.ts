import { ConfigLoader, ConfigStaticLoader } from '@ngx-config/core';

export function configFactory(): ConfigLoader {
  return new ConfigStaticLoader({
    system: {
      applicationName: 'APP_NAME',
      applicationUrl: '',
    },
    seo: {
      defaultPageTitle: 'DEFAULT_TITLE',
      pageTitlePositioning: 10,
      pageTitleSeparator: ' | ',
      defaultMetaDescription: 'DEFAULT_META_DESCRIPTION',
    },
    i18n: {
      defaultLanguage: {
        code: 'en',
        name: 'English',
        culture: 'en-US',
        dir: 'ltr',
      },
      availableLanguages: [
        {
          code: 'en',
          name: 'English',
          culture: 'en-US',
          dir: 'ltr',
        },
        {
          code: 'ar',
          name: 'العربية',
          culture: 'ar-EG',
          dir: 'rtl',
        },
      ],
      useLocalizedRoutes: true,
    },
  });
}
