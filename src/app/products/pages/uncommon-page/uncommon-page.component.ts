import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Ben 10';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'When';
    this.gender = 'female';
  }

  //118nPlural
  public clients: string[] = ['Pedro', 'Juliana', 'Melissa', 'Gabriel', 'Samuel', 'Tertulia', 'mojojojo'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Rodolfo el reno',
    age: 23,
    address: 'tenía roja, la nariz'
  }


}
