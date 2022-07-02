import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierViewComponent } from './calendrier-view.component';

describe('CalendrierViewComponent', () => {
  let component: CalendrierViewComponent;
  let fixture: ComponentFixture<CalendrierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
