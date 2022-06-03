import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowQrComponent } from './card-show-qr.component';

describe('CardShowQrComponent', () => {
  let component: CardShowQrComponent;
  let fixture: ComponentFixture<CardShowQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShowQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShowQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
