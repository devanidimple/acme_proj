import { Component, Input } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'acme-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css'],
})
export class SharedComponentComponent {
  @Input()data: string="";
  @Input() color:string="blue";
}
