import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapgeminiFormComponent } from './capgemini-form.component';

describe('CapgeminiFormComponent', () => {
  let component: CapgeminiFormComponent;
  let fixture: ComponentFixture<CapgeminiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapgeminiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapgeminiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
