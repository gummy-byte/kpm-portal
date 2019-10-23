import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSwitchPage } from './user-switch.page';

describe('UserSwitchPage', () => {
  let component: UserSwitchPage;
  let fixture: ComponentFixture<UserSwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSwitchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
