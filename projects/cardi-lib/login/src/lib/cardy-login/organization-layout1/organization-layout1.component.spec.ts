import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLayout1Component } from './organization-layout1.component';

describe('OrganizationLayout1Component', () => {
  let component: OrganizationLayout1Component;
  let fixture: ComponentFixture<OrganizationLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationLayout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
