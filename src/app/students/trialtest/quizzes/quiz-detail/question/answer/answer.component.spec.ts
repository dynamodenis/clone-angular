import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialAnswerComponent } from './answer.component';

describe('TrialAnswerComponent', () => {
  let component: TrialAnswerComponent;
  let fixture: ComponentFixture<TrialAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
