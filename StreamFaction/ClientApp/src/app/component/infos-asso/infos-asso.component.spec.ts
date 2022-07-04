import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAssoComponent } from './infos-asso.component';

describe('InfosAssoComponent', () => {
  let component: InfosAssoComponent;
  let fixture: ComponentFixture<InfosAssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosAssoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
