import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
