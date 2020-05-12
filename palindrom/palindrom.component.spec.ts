import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromComponent } from './palindrom.component';

describe('PalindromComponent', () => {
  let component: PalindromComponent;
  let fixture: ComponentFixture<PalindromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
