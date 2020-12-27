import { isPlatformBrowser } from '@angular/common';

export function windowFactory(platformId: object): Window | undefined {
  if (isPlatformBrowser(platformId)) {
    return window;
  }

  return undefined;
}
