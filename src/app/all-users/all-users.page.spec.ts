import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersPage } from './all-users.page';

describe('AllUsersPage', () => {
  let component: AllUsersPage;
  let fixture: ComponentFixture<AllUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
