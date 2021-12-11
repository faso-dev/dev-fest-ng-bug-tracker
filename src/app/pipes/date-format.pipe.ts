import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | undefined): string {
    return undefined !== value ?
      formatDate(value, 'd MMMM yyyy à HH:mm', 'fr-FR')
      : 'Néant'
      ;
  }

}
