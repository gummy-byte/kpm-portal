import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectRoomPage } from './lect-room.page';

describe('LectRoomPage', () => {
  let component: LectRoomPage;
  let fixture: ComponentFixture<LectRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
