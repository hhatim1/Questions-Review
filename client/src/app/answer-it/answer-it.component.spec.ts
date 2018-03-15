import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerItComponent } from './answer-it.component';

describe('AnswerItComponent', () => {
  let component: AnswerItComponent;
  let fixture: ComponentFixture<AnswerItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
