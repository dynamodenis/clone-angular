import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialtestComponent } from './trialtest.component';

describe('TrialtestComponent', () => {
  let component: TrialtestComponent;
  let fixture: ComponentFixture<TrialtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
