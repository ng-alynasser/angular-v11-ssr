import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-section-one',
  templateUrl: './services-section-one.component.html',
  styleUrls: ['./services-section-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionOneComponent implements OnInit {
  public services = [
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
