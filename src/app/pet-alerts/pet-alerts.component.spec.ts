import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAlertsComponent } from './pet-alerts.component';

describe('PetAlertsComponent', () => {
  let component: PetAlertsComponent;
  let fixture: ComponentFixture<PetAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetAlertsComponent]
    });
    fixture = TestBed.createComponent(PetAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
