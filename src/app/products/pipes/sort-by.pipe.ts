import { Pipe, PipeTransform } from '@angular/core';
import { HeroI } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class sortByPipe implements PipeTransform {
  transform(heroes: HeroI[], sortBy?: keyof HeroI | ''): HeroI[] {

    switch( sortBy ) {

      case 'name':
        return heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1);

      case 'canFly':
        return heroes.sort( (a,b) => (a.canFly > b.canFly) ? 1 : -1);

      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }

  }
}
