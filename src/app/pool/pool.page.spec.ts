import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolPage } from './pool.page';

describe('PoolPage', () => {
  let component: PoolPage;
  let fixture: ComponentFixture<PoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
