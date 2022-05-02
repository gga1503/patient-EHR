import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsAllHospitalsComponent } from './records-all-hospitals.component';

describe('RecordsAllHospitalsComponent', () => {
  let component: RecordsAllHospitalsComponent;
  let fixture: ComponentFixture<RecordsAllHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsAllHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsAllHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
