import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'powered-by',
  templateUrl: './powered-by.component.html',
  styleUrls: ['./powered-by.component.scss']
})
export class PoweredByComponent {
  @Input() public POWEREDBYLOGO!: string;
}
