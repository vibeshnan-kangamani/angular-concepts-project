import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamhubComponent } from './streamhub.component';

describe('StreamhubComponent', () => {
  let component: StreamhubComponent;
  let fixture: ComponentFixture<StreamhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamhubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
