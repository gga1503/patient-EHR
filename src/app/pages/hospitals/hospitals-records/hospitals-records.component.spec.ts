import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HospitalsRecordsComponent} from './hospitals-records.component';

describe('HospitalsRecordsComponent', () => {
  let component: HospitalsRecordsComponent;
  let fixture: ComponentFixture<HospitalsRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalsRecordsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
