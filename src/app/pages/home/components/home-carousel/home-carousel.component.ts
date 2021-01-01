import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    rtl: true,
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

  constructor(public readonly translateService: TranslateService) {}
}
