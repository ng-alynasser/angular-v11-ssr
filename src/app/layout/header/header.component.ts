import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Language } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() readonly toggleLanguage: EventEmitter<Language>;
  @Input() availableLanguages: Language[] = [];
  @Input() currentLanguage = '';
  @ViewChild('navbarIcon') icon: ElementRef;
  toggled: boolean;

  constructor() {
    this.toggleLanguage = new EventEmitter();
  }

  onToggleLanguage(language: Language): void {
    this.toggleLanguage.emit(language);
  }

  toggleIcon(): void {
    this.toggled = !this.toggled;
  }
}
