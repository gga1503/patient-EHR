import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DiseaseCardComponent} from './disease.card.component';

describe('CardDiseasesComponent', () => {
  let component: DiseaseCardComponent;
  let fixture: ComponentFixture<DiseaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiseaseCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
