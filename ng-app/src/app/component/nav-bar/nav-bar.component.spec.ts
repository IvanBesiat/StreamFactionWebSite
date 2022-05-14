import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as navBarComponent from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: navBarComponent.NavBarComponent;
  let fixture: ComponentFixture<navBarComponent.NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ navBarComponent.NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(navBarComponent.NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
