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

  services = [
    {
      title: 'Financial Due Diligence',
      image: 'assets/images/services/Financial-Due-Diligence.jpg',
    },
    {
      title: 'Financial Evaluation',
      image: 'assets/images/services/finance-side.jpg',
    },
    {
      title: 'Investment Advisory',
      image: 'assets/images/services/investment-advisory.jpg',
    },
    {
      title: 'Development Advisory',
      image: 'assets/images/services/Valuation-Development-Advisory.jpg',
    },
    {
      title: 'Internal Audit',
      image: 'assets/images/services/internal-audit-process-flow.jpg',
    },
    {
      title: 'Financial Appraisals & Modeling',
      image: 'assets/images/services/analyse-real-estate-investment.jpg',
    },
    {
      title: 'IFRS Implementation',
      image: 'assets/images/services/IFR.jpg',
    },
    {
      title: 'VAT Implementation',
      image: 'assets/images/services/VAT.jpg',
    },
    {
      title: 'Fiscal Adjustment Program',
      image: 'assets/images/services/fiscal-balance.png',
    },
    {
      title: 'Project Administration',
      image: 'assets/images/services/planning.jpg',
    },
    {
      title: 'Post-Merger Integration',
      image: 'assets/images/services/post-merger.jpg',
    },
    {
      title: 'Supply Chain Management',
      image: 'assets/images/services/supply-chain.jpg',
    },
    {
      title: 'Inventory Management and Registry',
      image: 'assets/images/services/DataManagement.jpg',
    },
  ];
}
