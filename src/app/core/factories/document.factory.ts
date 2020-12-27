import { isPlatformBrowser } from '@angular/common';

export function documentFactory(platformId: object): Document | undefined {
  if (isPlatformBrowser(platformId)) {
    return document;
  }

  return undefined;
}
