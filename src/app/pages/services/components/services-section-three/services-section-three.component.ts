import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-section-three',
  templateUrl: './services-section-three.component.html',
  styleUrls: ['./services-section-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionThreeComponent implements OnInit {
  services = [
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

  constructor() {}

  ngOnInit(): void {}
}
