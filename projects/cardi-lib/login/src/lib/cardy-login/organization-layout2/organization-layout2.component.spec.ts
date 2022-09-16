import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLayout2Component } from './organization-layout2.component';

describe('OrganizationLayout2Component', () => {
  let component: OrganizationLayout2Component;
  let fixture: ComponentFixture<OrganizationLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationLayout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
