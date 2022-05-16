import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschedulesComponent } from './addschedules.component';

describe('AddschedulesComponent', () => {
  let component: AddschedulesComponent;
  let fixture: ComponentFixture<AddschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
