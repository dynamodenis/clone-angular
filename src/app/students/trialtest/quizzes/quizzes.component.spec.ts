import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialComponent } from './quizzes.component';

describe('TrailComponent', () => {
  let component: TrialComponent;
  let fixture: ComponentFixture<TrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
