import { Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastService } from 'src/app/shared/utils/toast.service';
import { TableComponent } from 'src/app/feature/table/table.component';
import { UtilsModule } from 'src/app/shared/utils.module';

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
