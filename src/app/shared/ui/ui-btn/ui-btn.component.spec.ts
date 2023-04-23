import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBtnComponent } from './ui-btn.component';

describe('UiBtnComponent', () => {
  let component: UiBtnComponent;
  let fixture: ComponentFixture<UiBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UiBtnComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UiBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
