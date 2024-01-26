import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapgeminiGridComponent } from './capgemini-grid.component';

describe('CapgeminiGridComponent', () => {
  let component: CapgeminiGridComponent;
  let fixture: ComponentFixture<CapgeminiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapgeminiGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapgeminiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
