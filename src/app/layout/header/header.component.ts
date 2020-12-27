import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
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

  constructor() {
    this.toggleLanguage = new EventEmitter();
  }

  onToggleLanguage(language: Language): void {
    this.toggleLanguage.emit(language);
  }
}
