import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: '[app-root]',
  //selector: '.app-root',
  templateUrl: './app.component.html',
  //template: `<app-servers></app-servers>`,
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class AppComponent {
  username: string = '';
}
