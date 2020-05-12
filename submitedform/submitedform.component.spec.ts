import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedformComponent } from './submitedform.component';

describe('SubmitedformComponent', () => {
  let component: SubmitedformComponent;
  let fixture: ComponentFixture<SubmitedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
