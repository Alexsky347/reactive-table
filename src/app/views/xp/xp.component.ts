import { Component } from '@angular/core';
import { UiModule } from "../../shared/ui.module";

@Component({
    selector: 'app-xp',
    templateUrl: './xp.component.html',
    styleUrls: ['./xp.component.scss'],
    standalone: true,
    imports: [UiModule]
})
export class XpComponent {
  constructor() {}

}
