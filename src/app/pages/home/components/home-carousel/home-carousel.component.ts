import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCarouselComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
