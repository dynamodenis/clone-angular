import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoresComponent } from './quiz-scores.component';

describe('QuizScoresComponent', () => {
  let component: QuizScoresComponent;
  let fixture: ComponentFixture<QuizScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
