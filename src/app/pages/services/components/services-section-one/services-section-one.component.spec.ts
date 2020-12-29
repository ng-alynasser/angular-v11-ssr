import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionOneComponent } from './services-section-one.component';

describe('ServicesSectionOneComponent', () => {
  let component: ServicesSectionOneComponent;
  let fixture: ComponentFixture<ServicesSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
