import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingModelComponent } from './edit-training-model.component';

describe('EditTrainingModelComponent', () => {
  let component: EditTrainingModelComponent;
  let fixture: ComponentFixture<EditTrainingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrainingModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrainingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
