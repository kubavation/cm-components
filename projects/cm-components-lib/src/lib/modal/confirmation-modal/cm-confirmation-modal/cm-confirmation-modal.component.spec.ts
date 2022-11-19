import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmConfirmationModalComponent } from './cm-confirmation-modal.component';

describe('CmConfirmationModalComponent', () => {
  let component: CmConfirmationModalComponent;
  let fixture: ComponentFixture<CmConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmConfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
