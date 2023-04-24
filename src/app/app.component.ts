import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { UiLayoutDefaultComponent } from './shared/ui/ui-layout-default/ui-layout-default.component';
import { UiModule } from './shared/ui.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, UiModule]
})
export class AppComponent {
  title = 'table-base';
}
