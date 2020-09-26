import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLoginPage } from './lecture-login.page';

describe('LectureLoginPage', () => {
  let component: LectureLoginPage;
  let fixture: ComponentFixture<LectureLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
