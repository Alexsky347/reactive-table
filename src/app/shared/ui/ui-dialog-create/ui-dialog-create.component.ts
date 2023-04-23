import { Component, Inject, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UiBtnComponent } from '../ui-btn/ui-btn.component';
import * as jsonData from '../../../../assets/config/config.json';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { ItSchemaMain } from 'src/app/core/interface/it-schema';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObjectKeysPipe } from 'src/app/core/pipe/object-keys.pipe';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ui-dialog-create',
  templateUrl: './ui-dialog-create.component.html',
  styleUrls: ['./ui-dialog-create.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    UiBtnComponent,
    ReactiveFormsModule,
    CommonModule,
    ObjectKeysPipe,
    MatInputModule,
  ],
})
export class UiDialogCreateComponent {
  schema: Record<string, ItSchemaMain> = jsonData;
  properties: ItSchemaMain;
  myForm!: FormGroup;
  formBuilder = inject(FormBuilderService);
  obj: Record<string, unknown> = {};
  action: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string, obj: Record<string, unknown> },
    private dialogRef: MatDialogRef<UiDialogCreateComponent>
  ) {
    const mainKey = this.data.name.replace('/', '').trim();
    this.properties = this.schema[mainKey];
    this.obj = this.data.obj;
    this.obj ? this.myForm = this.formBuilder.buildForm(this.properties, this.obj): this.myForm = this.formBuilder.buildForm(this.properties);


  }

  /**
   * @description Submit form
   */
  submitMyForm() {
    if (this.myForm.valid) {
      this.close();
    } else{
      // TODO toast
    }
  }

  /**
   * @description Close dialog
   */
  close() {
    this.dialogRef.close({ state: true, data: this.myForm.value });
  }
}
