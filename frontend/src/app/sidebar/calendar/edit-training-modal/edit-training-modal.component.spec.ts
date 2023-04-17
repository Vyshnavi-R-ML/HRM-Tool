import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingModalComponent } from './edit-training-modal.component';

describe('EditTrainingModelComponent', () => {
  let component: EditTrainingModalComponent;
  let fixture: ComponentFixture<EditTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrainingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
