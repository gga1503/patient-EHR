import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHospitalsComponent } from './card-hospitals.component';

describe('CardHospitalsComponent', () => {
  let component: CardHospitalsComponent;
  let fixture: ComponentFixture<CardHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
