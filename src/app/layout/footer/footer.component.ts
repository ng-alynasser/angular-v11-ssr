import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new WOW().init();
  }
}
