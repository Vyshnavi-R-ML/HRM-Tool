import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmReqnomModalComponent } from './rm-reqnom-modal.component';

describe('RmReqnomModalComponent', () => {
  let component: RmReqnomModalComponent;
  let fixture: ComponentFixture<RmReqnomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmReqnomModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmReqnomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
