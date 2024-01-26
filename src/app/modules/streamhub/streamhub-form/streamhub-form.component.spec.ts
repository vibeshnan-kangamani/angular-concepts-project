/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamhubFormComponent } from './streamhub-form.component';

describe('StreamhubFormComponent', () => {
  let component: StreamhubFormComponent;
  let fixture: ComponentFixture<StreamhubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamhubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamhubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
