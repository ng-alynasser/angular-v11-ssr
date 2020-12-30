import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent implements OnInit {
  cards = [
    {
      title: 'Water Technologies',
      icon: 'hand-holding-water',
    },
    {
      title: 'Petrochemicals',
      icon: 'gas-pump',
    },
    {
      title: 'Industrial',
      icon: 'industry',
    },
    {
      title: 'Real Estate',
      icon: 'place-of-worship',
    },
    {
      title: 'Plastics',
      icon: 'prescription-bottle',
    },
    {
      title: 'Engineering',
      icon: 'hard-hat',
    },
    {
      title: 'Automobile',
      icon: 'bus-alt',
    },
    {
      title: 'Construction products',
      icon: 'tools',
    },
    {
      title: 'Telecommunication',
      icon: 'satellite-dish',
    },
    {
      title: 'Energy',
      icon: 'plug',
    },
    {
      title: 'Consumer Products',
      icon: 'hands',
    },
    {
      title: 'Medical',
      icon: 'hand-holding-medical',
    },
    {
      title: 'Food and Agriculture',
      icon: 'seedling',
    },
    {
      title: 'Education and IT',
      icon: 'chalkboard-teacher',
    },
    {
      title: 'Supply Chain Management',
      icon: 'network-wired',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
