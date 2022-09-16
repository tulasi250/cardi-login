import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLayout3Component } from './organization-layout3.component';

describe('OrganizationLayout3Component', () => {
  let component: OrganizationLayout3Component;
  let fixture: ComponentFixture<OrganizationLayout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationLayout3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
