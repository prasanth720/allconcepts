import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpDataComponent } from './all-emp-data.component';

describe('AllEmpDataComponent', () => {
  let component: AllEmpDataComponent;
  let fixture: ComponentFixture<AllEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
