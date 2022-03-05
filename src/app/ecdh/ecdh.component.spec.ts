import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcdhComponent } from './ecdh.component';

describe('EcdhComponent', () => {
  let component: EcdhComponent;
  let fixture: ComponentFixture<EcdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcdhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
