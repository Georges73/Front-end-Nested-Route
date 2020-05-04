import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSpecComponent } from './account-spec.component';

describe('AccountSpecComponent', () => {
  let component: AccountSpecComponent;
  let fixture: ComponentFixture<AccountSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
