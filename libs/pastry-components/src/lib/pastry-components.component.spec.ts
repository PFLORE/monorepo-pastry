import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryComponentsComponent } from './pastry-components.component';

describe('PastryComponentsComponent', () => {
  let component: PastryComponentsComponent;
  let fixture: ComponentFixture<PastryComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
