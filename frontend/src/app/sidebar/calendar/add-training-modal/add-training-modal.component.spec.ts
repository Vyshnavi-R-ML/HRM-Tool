import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingModalComponent } from './add-training-modal.component';

describe('AddTrainingModalComponent', () => {
  let component: AddTrainingModalComponent;
  let fixture: ComponentFixture<AddTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
