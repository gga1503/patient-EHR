import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiseasesDetailComponent } from './card-diseases-detail.component';

describe('CardDiseasesDetailComponent', () => {
  let component: CardDiseasesDetailComponent;
  let fixture: ComponentFixture<CardDiseasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiseasesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiseasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
