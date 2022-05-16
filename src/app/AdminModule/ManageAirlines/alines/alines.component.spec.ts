import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinesComponent } from './alines.component';

describe('AlinesComponent', () => {
  let component: AlinesComponent;
  let fixture: ComponentFixture<AlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
