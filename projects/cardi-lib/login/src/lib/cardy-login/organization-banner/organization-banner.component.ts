import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'organization-banner',
  templateUrl: './organization-banner.component.html',
  styleUrls: ['./organization-banner.component.scss']
})
export class OrganizationBannerComponent {
  @Input() public BANNER!: string;
  @Input() public BANNERWIDTH!: string;
}
