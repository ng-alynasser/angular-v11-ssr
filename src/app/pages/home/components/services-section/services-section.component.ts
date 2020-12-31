import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    animateIn: 'animate__animated  animate__fadeIn animate__slower',
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
        items: 4,
      },
    },
  };

  public services = [
    {
      title: 'Financial Due Diligence',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436335/sageco-services/Financial-Due-Diligence_tk1rhj.jpg',
    },
    {
      title: 'Financial Evaluation',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436334/sageco-services/finance-side_d8kvyh.jpg',
    },
    {
      title: 'Investment Advisory',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436338/sageco-services/investment-advisory_x8dwvi.jpg',
    },
    {
      title: 'Development Advisory',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436334/sageco-services/Valuation-Development-Advisory_ixvmnh.jpg',
    },
    {
      title: 'Internal Audit',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436337/sageco-services/internal-audit-process-flow_xh9bxj.jpg',
    },
    {
      title: 'Financial Appraisals & Modeling',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436332/sageco-services/analyse-real-estate-investment_agvqt6.jpg',
    },
    {
      title: 'IFRS Implementation',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436338/sageco-services/IFR_vgwewy.jpg',
    },
    {
      title: 'VAT Implementation',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436332/sageco-services/VAT_tlkr69.jpg',
    },
  ];
}
