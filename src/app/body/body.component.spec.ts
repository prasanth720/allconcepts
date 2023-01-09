import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent forms', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('forms',()=>
  {
    expect(component.form).toContain('eid');
  })
});
