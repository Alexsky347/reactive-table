import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItSchemaMain } from '../interface/it-schema';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }

  /**
   * Build form
   * @param obj
   * @param data
   * @returns
   */
  buildForm(obj: ItSchemaMain, data?: any): FormGroup {
    const group: Record<string, FormControl> = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const control = new FormControl(data?.[key] ?? null, []);

        if (obj[key].required) {
          control.setValidators([Validators.required]);
        }

        if (obj[key].type === 'number') {
          control.setValidators([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
        }

        group[key] = control;
      }
    }

    return new FormGroup(group);
  }
}
