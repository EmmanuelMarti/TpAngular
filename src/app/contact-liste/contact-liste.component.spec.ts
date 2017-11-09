import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListeComponent } from './contact-liste.component';

describe('ContactListeComponent', () => {
  let component: ContactListeComponent;
  let fixture: ComponentFixture<ContactListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
