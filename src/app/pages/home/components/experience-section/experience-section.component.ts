import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
