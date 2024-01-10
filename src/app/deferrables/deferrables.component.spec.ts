import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrablesComponent } from './deferrables.component';

describe('DeferrablesComponent', () => {
  let component: DeferrablesComponent;
  let fixture: ComponentFixture<DeferrablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
