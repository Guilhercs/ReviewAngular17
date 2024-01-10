import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrablesViewComponent } from './deferrables-view.component';

describe('DeferrablesViewComponent', () => {
  let component: DeferrablesViewComponent;
  let fixture: ComponentFixture<DeferrablesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrablesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
