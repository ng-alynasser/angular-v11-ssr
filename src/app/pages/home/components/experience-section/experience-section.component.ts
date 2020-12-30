import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent implements OnInit {
  cards: { title: string; icon: IconProp }[] = [
    {
      title: 'Water Technologies',
      icon: {
        iconName: 'hand-holding-water',
        prefix: 'fas',
      },
    },
    {
      title: 'Petrochemicals',
      icon: {
        iconName: 'gas-pump',
        prefix: 'fas',
      },
    },
    {
      title: 'Industrial',
      icon: {
        iconName: 'industry',
        prefix: 'fas',
      },
    },
    {
      title: 'Real Estate',
      icon: {
        iconName: 'place-of-worship',
        prefix: 'fas',
      },
    },
    {
      title: 'Plastics',
      icon: {
        iconName: 'prescription-bottle',
        prefix: 'fas',
      },
    },
    {
      title: 'Engineering',
      icon: {
        iconName: 'hard-hat',
        prefix: 'fas',
      },
    },
    {
      title: 'Automobile',
      icon: {
        iconName: 'bus-alt',
        prefix: 'fas',
      },
    },
    {
      title: 'Construction products',
      icon: {
        iconName: 'tools',
        prefix: 'fas',
      },
    },
    {
      title: 'Telecommunication',
      icon: {
        iconName: 'satellite-dish',
        prefix: 'fas',
      },
    },
    {
      title: 'Energy',
      icon: {
        iconName: 'plug',
        prefix: 'fas',
      },
    },
    {
      title: 'Consumer Products',
      icon: {
        iconName: 'hands',
        prefix: 'fas',
      },
    },
    {
      title: 'Medical',
      icon: {
        iconName: 'hand-holding-medical',
        prefix: 'fas',
      },
    },
    {
      title: 'Food and Agriculture',
      icon: {
        iconName: 'seedling',
        prefix: 'fas',
      },
    },
    {
      title: 'Education and IT',
      icon: {
        iconName: 'chalkboard-teacher',
        prefix: 'fas',
      },
    },
    {
      title: 'Supply Chain Management',
      icon: {
        iconName: 'network-wired',
        prefix: 'fas',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
