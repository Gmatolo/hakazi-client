import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUploadSuccessComponent } from './resume-upload-success.component';

describe('ResumeUploadSuccessComponent', () => {
  let component: ResumeUploadSuccessComponent;
  let fixture: ComponentFixture<ResumeUploadSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeUploadSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeUploadSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
