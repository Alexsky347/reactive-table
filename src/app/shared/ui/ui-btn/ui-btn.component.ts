import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ui-btn',
    templateUrl: './ui-btn.component.html',
    styleUrls: ['./ui-btn.component.scss'],
})
export class UiBtnComponent {

  @Input() disabled! : boolean;

}
