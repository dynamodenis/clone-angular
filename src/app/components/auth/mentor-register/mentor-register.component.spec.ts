import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRegisterComponent } from './mentor-register.component';

describe('MentorRegisterComponent', () => {
  let component: MentorRegisterComponent;
  let fixture: ComponentFixture<MentorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
