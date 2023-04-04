import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeModalComponent } from './view-employee-modal.component';

describe('ViewEmployeeModalComponent', () => {
  let component: ViewEmployeeModalComponent;
  let fixture: ComponentFixture<ViewEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
