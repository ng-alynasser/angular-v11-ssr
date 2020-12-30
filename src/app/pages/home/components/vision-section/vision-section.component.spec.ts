import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionSectionComponent } from './vision-section.component';

describe('VisionSectionComponent', () => {
  let component: VisionSectionComponent;
  let fixture: ComponentFixture<VisionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
