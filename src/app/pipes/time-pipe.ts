import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAt',
  pure: false
})
export class TimePipe implements PipeTransform {

  transform(createdAt: Date) {
    let currentTime = new Date().getTime();
    let timePassed = currentTime - createdAt.getTime();
    let time = Math.round(timePassed/60000)
    if (time === 0){
      return " less than a minute";
    } if (time === 1) {
      return time + " minute";
    } else {
      return time + " minutes";
    }
  }
}