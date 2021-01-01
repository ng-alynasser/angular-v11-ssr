import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LocalStorageService } from 'src/app/core/providers/local-storage.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCarouselComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    animateIn: 'animate__animated  animate__fadeIn animate__slower',
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  @ViewChild('carouselContent') carouselContent: ElementRef<HTMLDivElement>;
  imageHeight = '685px';

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly translateService: TranslateService
  ) {
    if (
      this.localStorageService.get('uiLanguageCode') &&
      this.localStorageService.get('uiLanguageCode') === 'ar'
    ) {
      this.customOptions.rtl = true;
    } else {
      this.customOptions.rtl = false;
    }

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      event.lang === 'ar'
        ? (this.customOptions = Object.assign(
            { rtl: true },
            this.customOptions
          ))
        : (this.customOptions = Object.assign(
            { rtl: false },
            this.customOptions
          ));
    });
  }

  ngAfterViewInit(): void {
    console.log(this.carouselContent.nativeElement.clientHeight);
    this.imageHeight = this.carouselContent.nativeElement.clientHeight + 'px';
  }
}
