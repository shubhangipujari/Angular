import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketmodifyComponent } from './ticketmodify.component';

describe('TicketmodifyComponent', () => {
  let component: TicketmodifyComponent;
  let fixture: ComponentFixture<TicketmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketmodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
