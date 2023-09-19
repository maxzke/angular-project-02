import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPaigeComponent } from './main-paige.component';

describe('MainPaigeComponent', () => {
  let component: MainPaigeComponent;
  let fixture: ComponentFixture<MainPaigeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPaigeComponent]
    });
    fixture = TestBed.createComponent(MainPaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
