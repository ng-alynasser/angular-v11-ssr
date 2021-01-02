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
      title: 'HOME.EXP.WATER',
      icon: {
        iconName: 'hand-holding-water',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.PERTROCHEMICALS',
      icon: {
        iconName: 'gas-pump',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.INDUSTRIAL',
      icon: {
        iconName: 'industry',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.REAL_STATE',
      icon: {
        iconName: 'place-of-worship',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.PLASTICS',
      icon: {
        iconName: 'prescription-bottle',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.ENGINEERING',
      icon: {
        iconName: 'hard-hat',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.AUTOMOBILE',
      icon: {
        iconName: 'bus-alt',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.CONSTRUCTION',
      icon: {
        iconName: 'tools',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.TELECOMMUNICATION',
      icon: {
        iconName: 'satellite-dish',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.ENERGY',
      icon: {
        iconName: 'plug',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.CONSUMER',
      icon: {
        iconName: 'hands',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.MEDICAL',
      icon: {
        iconName: 'hand-holding-medical',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.FOOD',
      icon: {
        iconName: 'seedling',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.EDUCATION',
      icon: {
        iconName: 'chalkboard-teacher',
        prefix: 'fas',
      },
    },
    {
      title: 'HOME.EXP.CHAIN',
      icon: {
        iconName: 'network-wired',
        prefix: 'fas',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
