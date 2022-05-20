import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbypnrComponent } from './viewbypnr.component';

describe('ViewbypnrComponent', () => {
  let component: ViewbypnrComponent;
  let fixture: ComponentFixture<ViewbypnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbypnrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbypnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
