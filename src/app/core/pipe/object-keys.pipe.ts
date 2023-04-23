import { Pipe, PipeTransform } from '@angular/core';
import { ItSchemaMain } from '../interface/it-schema';

@Pipe({
  name: 'objectKeys',
  standalone: true
})
export class ObjectKeysPipe implements PipeTransform {

  transform(obj: ItSchemaMain | Record<string, string>): string[] | undefined {
    return typeof obj === 'object'? Object.keys(obj) : undefined;
  }

}
