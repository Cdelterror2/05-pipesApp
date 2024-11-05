import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'burbuja';
  public nameUpper: string = 'bellota';
  public fullName: string = 'bOmBOm';

  public customDate: Date = new Date();
}
