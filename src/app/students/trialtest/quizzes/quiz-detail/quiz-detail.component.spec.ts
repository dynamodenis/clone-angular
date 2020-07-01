import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialDetailComponent } from './quiz-detail.component';

describe('TrialDetailComponent', () => {
  let component: TrialDetailComponent;
  let fixture: ComponentFixture<TrialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
