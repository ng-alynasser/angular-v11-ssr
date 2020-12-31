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
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436335/sageco-services/fiscal-balance_blrodo.png',
    },
    {
      title: 'Project Administration',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436340/sageco-services/planning_sgn51v.jpg',
    },
    {
      title: 'Post-Merger Integration',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436338/sageco-services/post-merger_wxdphs.jpg',
    },
    {
      title: 'Supply Chain Management',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436332/sageco-services/supply-chain_jeuqnb.jpg',
    },
    {
      title: 'Inventory Management and Registry',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1609436335/sageco-services/DataManagement_fq1tpb.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
