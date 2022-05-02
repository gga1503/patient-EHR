import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomNavbarComponent } from './buttom-navbar.component';

describe('ButtomNavbarComponent', () => {
  let component: ButtomNavbarComponent;
  let fixture: ComponentFixture<ButtomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
