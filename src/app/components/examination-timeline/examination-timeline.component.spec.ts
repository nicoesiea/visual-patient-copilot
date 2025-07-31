import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationTimelineComponent } from './examination-timeline.component';

describe('ExaminationTimelineComponent', () => {
  let component: ExaminationTimelineComponent;
  let fixture: ComponentFixture<ExaminationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExaminationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
