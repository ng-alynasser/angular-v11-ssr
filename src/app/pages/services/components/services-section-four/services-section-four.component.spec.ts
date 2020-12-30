import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionFourComponent } from './services-section-four.component';

describe('ServicesSectionFourComponent', () => {
  let component: ServicesSectionFourComponent;
  let fixture: ComponentFixture<ServicesSectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectionFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
