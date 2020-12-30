import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionThreeComponent } from './services-section-three.component';

describe('ServicesSectionThreeComponent', () => {
  let component: ServicesSectionThreeComponent;
  let fixture: ComponentFixture<ServicesSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
