import { Component, inject } from '@angular/core';
import * as jsonData from '../../../assets/config/config.json';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { ItSchemaMain } from 'src/app/core/interface/it-schema';
import { UiModule } from 'src/app/shared/ui.module';
import { NgMainModule } from 'src/app/shared/ng-main.module';
import { ObjectKeysPipe } from "../../core/pipe/object-keys.pipe";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [NgMainModule, UiModule, ObjectKeysPipe]
})
export class LoginComponent {
  schema: Record<string, ItSchemaMain> = jsonData;

  properties!: ItSchemaMain;

  loginForm!: FormGroup;

  formBuilder = inject(FormBuilderService);

  constructor() {
    this.properties = this.schema['login'];
    this.loginForm = this.formBuilder.buildForm(
      this.properties
    );
  }

  submitMyForm() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
    }
  }
}
