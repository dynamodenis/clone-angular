import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetquizComponent } from './setquiz.component';

describe('SetquizComponent', () => {
  let component: SetquizComponent;
  let fixture: ComponentFixture<SetquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
