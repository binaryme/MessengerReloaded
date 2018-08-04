import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesinnerComponent } from './mensajesinner.component';

describe('MensajesinnerComponent', () => {
  let component: MensajesinnerComponent;
  let fixture: ComponentFixture<MensajesinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
