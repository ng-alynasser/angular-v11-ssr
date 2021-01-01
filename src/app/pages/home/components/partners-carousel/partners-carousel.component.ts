import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners-carousel',
  templateUrl: './partners-carousel.component.html',
  styleUrls: ['./partners-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
  };

  partners = [
    {
      image: 'assets/images/partners/Picture7.jpg',
    },
    {
      image: 'assets/images/partners/Picture8.jpg',
    },
    {
      image: 'assets/images/partners/Picture9.jpg',
    },
    {
      image: 'assets/images/partners/Picture10.jpg',
    },
    {
      image: 'assets/images/partners/Picture11.jpg',
    },
    {
      image: 'assets/images/partners/Picture12.jpg',
    },
    {
      image: 'assets/images/partners/Picture13.jpg',
    },
    {
      image: 'assets/images/partners/Picture14.jpg',
    },
    {
      image: 'assets/images/partners/Picture15.jpg',
    },
    {
      image: 'assets/images/partners/Picture16.jpg',
    },
    {
      image: 'assets/images/partners/Picture17.jpg',
    },
    {
      image: 'assets/images/partners/Picture18.jpg',
    },
    {
      image: 'assets/images/partners/Picture19.jpg',
    },
    {
      image: 'assets/images/partners/Picture20.jpg',
    },
    {
      image: 'assets/images/partners/Picture21.jpg',
    },
    {
      image: 'assets/images/partners/Picture22.jpg',
    },
    {
      image: 'assets/images/partners/Picture23.jpg',
    },
    {
      image: 'assets/images/partners/Picture24.jpg',
    },
    {
      image: 'assets/images/partners/Picture25.jpg',
    },
    {
      image: 'assets/images/partners/Picture26.jpg',
    },
    {
      image: 'assets/images/partners/Picture27.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
