import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSegmentAndProductwiseAnalysisComponent } from './customer-segment-and-productwise-analysis.component';

describe('CustomerSegmentAndProductwiseAnalysisComponent', () => {
  let component: CustomerSegmentAndProductwiseAnalysisComponent;
  let fixture: ComponentFixture<CustomerSegmentAndProductwiseAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSegmentAndProductwiseAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSegmentAndProductwiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
