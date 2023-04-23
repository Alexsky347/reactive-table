import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ui-btn-icon',
  templateUrl: './ui-btn-icon.component.html',
  styleUrls: ['./ui-btn-icon.component.scss'],
  standalone: true,
  imports:[
    MatIconModule,
    CommonModule
  ]
})
export class UiBtnIconComponent {
  @Input() type!: 'delete' | 'edit';

}
