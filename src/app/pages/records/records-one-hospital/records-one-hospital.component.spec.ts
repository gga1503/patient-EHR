import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsOneHospitalComponent } from './records-one-hospital.component';

describe('RecordsOneHospitalComponent', () => {
  let component: RecordsOneHospitalComponent;
  let fixture: ComponentFixture<RecordsOneHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsOneHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsOneHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
