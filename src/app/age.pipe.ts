import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'age'
})
export class AgePipe implements PipeTransform{

  transform(birthDate: Date, ...args): number {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear()-birth.getFullYear()
    let monthDifference = today.getMonth()-birth.getMonth()

    if(monthDifference<0 || (monthDifference==0 && today.getDay()<today.getDay()))
      age--;

    return age;
  }
}
