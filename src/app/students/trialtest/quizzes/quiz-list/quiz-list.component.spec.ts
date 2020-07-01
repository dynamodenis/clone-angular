import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialListComponent } from './quiz-list.component';

describe('TrialListComponent', () => {
  let component: TrialListComponent;
  let fixture: ComponentFixture<TrialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
