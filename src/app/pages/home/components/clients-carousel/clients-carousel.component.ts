import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients-carousel',
  templateUrl: './clients-carousel.component.html',
  styleUrls: ['./clients-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    navSpeed: 700,
    autoplay: true,
    dots: false,
    rtl: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
  };

  clients = [
    {
      image: 'assets/images/clients/Picture2.jpg',
    },
    {
      image: 'assets/images/clients/Picture3.jpg',
    },
    {
      image: 'assets/images/clients/Picture4.jpg',
    },
    {
      image: 'assets/images/clients/Picture5.jpg',
    },
    {
      image: 'assets/images/clients/Picture6.jpg',
    },
    {
      image: 'assets/images/clients/Picture7.jpg',
    },
    {
      image: 'assets/images/clients/Picture8.jpg',
    },
    {
      image: 'assets/images/clients/Picture9.jpg',
    },
    {
      image: 'assets/images/clients/Picture10.jpg',
    },
    {
      image: 'assets/images/clients/Picture11.jpg',
    },
    {
      image: 'assets/images/clients/Picture12.jpg',
    },
    {
      image: 'assets/images/clients/Picture13.jpg',
    },
    {
      image: 'assets/images/clients/Picture14.jpg',
    },
    {
      image: 'assets/images/clients/Picture15.jpg',
    },
    {
      image: 'assets/images/clients/Picture16.jpg',
    },
    {
      image: 'assets/images/clients/Picture17.jpg',
    },
    {
      image: 'assets/images/clients/Picture18.jpg',
    },
    {
      image: 'assets/images/clients/Picture19.jpg',
    },
    {
      image: 'assets/images/clients/Picture20.jpg',
    },
    {
      image: 'assets/images/clients/Picture21.jpg',
    },
    {
      image: 'assets/images/clients/Picture22.jpg',
    },
    {
      image: 'assets/images/clients/Picture23.jpg',
    },
    {
      image: 'assets/images/clients/Picture24.jpg',
    },
    {
      image: 'assets/images/clients/Picture25.jpg',
    },
    {
      image: 'assets/images/clients/Picture26.jpg',
    },
    {
      image: 'assets/images/clients/Picture27.jpg',
    },
    {
      image: 'assets/images/clients/Picture28.jpg',
    },
    {
      image: 'assets/images/clients/Picture29.jpg',
    },
    {
      image: 'assets/images/clients/Picture30.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
