import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDialogCreateComponent } from './ui-dialog-create.component';

describe('UiDialogCreateComponent', () => {
  let component: UiDialogCreateComponent;
  let fixture: ComponentFixture<UiDialogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDialogCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
