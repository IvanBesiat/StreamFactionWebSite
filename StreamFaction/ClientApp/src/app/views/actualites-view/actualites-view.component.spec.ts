import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesViewComponent } from './actualites-view.component';

describe('ActualitesViewComponent', () => {
  let component: ActualitesViewComponent;
  let fixture: ComponentFixture<ActualitesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
