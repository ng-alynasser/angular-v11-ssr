import { InjectionToken } from '@angular/core';

export const enum LayoutDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

export const WINDOW = new InjectionToken<Window>('Window');
export const DOCUMENT = new InjectionToken<Document>('Document');
