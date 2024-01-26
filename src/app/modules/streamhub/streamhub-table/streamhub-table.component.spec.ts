/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamhubTableComponent } from './streamhub-table.component';

describe('StreamhubTableComponent', () => {
  let component: StreamhubTableComponent;
  let fixture: ComponentFixture<StreamhubTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamhubTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamhubTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
