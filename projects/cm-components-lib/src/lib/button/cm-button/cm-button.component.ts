import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'cm-button',
  templateUrl: './cm-button.component.html',
  styleUrls: ['./cm-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmButtonComponent {

  @Input() label = '';

  constructor() { }

}
