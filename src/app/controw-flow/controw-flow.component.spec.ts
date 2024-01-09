import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControwFlowComponent } from './controw-flow.component';

describe('ControwFlowComponent', () => {
  let component: ControwFlowComponent;
  let fixture: ComponentFixture<ControwFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControwFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControwFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
