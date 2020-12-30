import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
