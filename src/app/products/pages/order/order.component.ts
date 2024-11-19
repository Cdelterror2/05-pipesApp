import { Component } from '@angular/core';
import { Color, HeroI } from '../../interfaces/hero.interface';



@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof HeroI;

  public heroes: HeroI[] = [
    {
      name: 'Deku',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Bakugo',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Tokoyami',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'Allmight',
      canFly: false,
      color: Color.blue,
    },

  ]


  toggleUperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof HeroI ){
    this.orderBy = value;
  }

}
