import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBtnComponent } from './ui/ui-btn/ui-btn.component';
import { UiBtnIconComponent } from './ui/ui-btn-icon/ui-btn-icon.component';
import { UiDialogCreateComponent } from './ui/ui-dialog-create/ui-dialog-create.component';
import { UiLayoutDefaultComponent } from './ui/ui-layout-default/ui-layout-default.component';
import { UiPaginationComponent } from './ui/ui-pagination/ui-pagination.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ObjectKeysPipe } from 'src/app/core/pipe/object-keys.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UiBtnComponent,
    UiBtnIconComponent,
    UiDialogCreateComponent,
    UiLayoutDefaultComponent,
    UiPaginationComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    ObjectKeysPipe,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    UiBtnComponent,
    UiBtnIconComponent,
    UiDialogCreateComponent,
    UiLayoutDefaultComponent,
    UiPaginationComponent,
  ],
})
export class UiModule {}
