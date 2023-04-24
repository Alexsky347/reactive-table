import { Component } from '@angular/core';
import { TableComponent } from 'src/app/feature/table/table.component';
import { UiModule } from "../../shared/ui.module";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        TableComponent,
        UiModule
    ]
})
export class HomeComponent {

}
