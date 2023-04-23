import { Component } from '@angular/core';
import { TableComponent } from 'src/app/feature/table/table.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports:[
      TableComponent
    ]
})
export class HomeComponent {

}
