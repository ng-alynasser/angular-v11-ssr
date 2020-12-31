import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardsComponent implements OnInit {
  contacts = [
    {
      city: 'austin',
      address: '22 Texas West Hills',
      email: 'needhelp@sageco.com',
      phone: '666 888 0000',
    },
    {
      city: 'austin',
      address: '22 Texas West Hills',
      email: 'needhelp@sageco.com',
      phone: '666 888 0000',
    },
    {
      city: 'austin',
      address: '22 Texas West Hills',
      email: 'needhelp@sageco.com',
      phone: '666 888 0000',
    },
    {
      city: 'austin',
      address: '22 Texas West Hills',
      email: 'needhelp@sageco.com',
      phone: '666 888 0000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
