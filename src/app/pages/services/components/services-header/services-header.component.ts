import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-header',
  templateUrl: './services-header.component.html',
  styleUrls: ['./services-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
