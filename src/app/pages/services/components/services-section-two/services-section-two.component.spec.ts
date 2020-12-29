import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionTwoComponent } from './services-section-two.component';

describe('ServicesSectionTwoComponent', () => {
  let component: ServicesSectionTwoComponent;
  let fixture: ComponentFixture<ServicesSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
