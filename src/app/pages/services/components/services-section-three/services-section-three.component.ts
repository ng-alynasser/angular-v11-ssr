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
      title: 'SERVICES.FISCAL',
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609436335/sageco-services/fiscal-balance_blrodo.png',
    },
    {
      title: 'SERVICES.PROJECT_ADMINSTRATION',
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609436340/sageco-services/planning_sgn51v.jpg',
    },
    {
      title: 'SERVICES.POST_MERGER',
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609436338/sageco-services/post-merger_wxdphs.jpg',
    },
    {
      title: 'SERVICES.SUPPLY_CHAIN',
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609436332/sageco-services/supply-chain_jeuqnb.jpg',
    },
    {
      title: 'SERVICES.INVENTORY_MANAGEMENT',
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609436335/sageco-services/DataManagement_fq1tpb.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
