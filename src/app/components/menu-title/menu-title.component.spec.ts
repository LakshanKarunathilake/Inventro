import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitlePage } from './menu-title.page';

describe('MenuTitlePage', () => {
  let component: MenuTitlePage;
  let fixture: ComponentFixture<MenuTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
