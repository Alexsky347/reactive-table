import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss'],
})
export class UiPaginationComponent {
  @Input() length!: number;

  @Output() pageEvent = new EventEmitter<PageEvent>();

  constructor() {}

  /**
   *
   * @param event PageEvent
   */
  loadPage(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}
