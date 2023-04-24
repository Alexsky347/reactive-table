import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-btn-icon',
  templateUrl: './ui-btn-icon.component.html',
  styleUrls: ['./ui-btn-icon.component.scss'],
})
export class UiBtnIconComponent {
  @Input() type!: 'delete' | 'edit';

}
