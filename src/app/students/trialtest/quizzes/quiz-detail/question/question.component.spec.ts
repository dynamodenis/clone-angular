import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialQuestionComponent } from './question.component';

describe('TrialQuestionComponent', () => {
  let component: TrialQuestionComponent;
  let fixture: ComponentFixture<TrialQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
