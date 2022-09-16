import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBannerComponent } from './organization-banner.component';

describe('OrganizationBannerComponent', () => {
  let component: OrganizationBannerComponent;
  let fixture: ComponentFixture<OrganizationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
