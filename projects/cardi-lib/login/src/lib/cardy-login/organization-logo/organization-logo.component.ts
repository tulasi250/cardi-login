import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'organization-logo',
  templateUrl: './organization-logo.component.html',
  styleUrls: ['./organization-logo.component.scss']
})
export class OrganizationLogoComponent  {
  @Input() public LOGO!: string;
  @Input() public LOGODESCRIPTION!: string;
}
