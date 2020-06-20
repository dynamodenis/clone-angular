import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemQuestionComponent } from './problem-question.component';

describe('ProblemQuestionComponent', () => {
  let component: ProblemQuestionComponent;
  let fixture: ComponentFixture<ProblemQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
