import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryCommonsComponent } from './pastry-commons.component';

describe('PastryCommonsComponent', () => {
  let component: PastryCommonsComponent;
  let fixture: ComponentFixture<PastryCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
