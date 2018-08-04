import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConversacionesComponent } from './sidebarconversaciones.component';

describe('ListadeconversacionesComponent', () => {
  let component: SidebarConversacionesComponent;
  let fixture: ComponentFixture<SidebarConversacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarConversacionesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarConversacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
