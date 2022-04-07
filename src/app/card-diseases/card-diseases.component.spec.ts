import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiseasesComponent } from './card-diseases.component';

describe('CardDiseasesComponent', () => {
  let component: CardDiseasesComponent;
  let fixture: ComponentFixture<CardDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
