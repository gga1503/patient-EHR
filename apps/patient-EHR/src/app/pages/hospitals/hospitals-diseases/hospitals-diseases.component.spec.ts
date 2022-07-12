import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HospitalsDiseasesComponent} from './hospitals-diseases.component';

describe('HospitalsDiseasesComponent', () => {
  let component: HospitalsDiseasesComponent;
  let fixture: ComponentFixture<HospitalsDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalsDiseasesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
