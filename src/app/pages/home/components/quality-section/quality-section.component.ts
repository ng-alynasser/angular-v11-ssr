import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quality-section',
  templateUrl: './quality-section.component.html',
  styleUrls: ['./quality-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitySectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
