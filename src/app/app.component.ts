import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: '[app-root]',
  //selector: '.app-root',
  templateUrl: './app.component.html',
  //template: `<app-servers></app-servers>`,
  styleUrls: ['./app.component.css']
 /*  styles: [`
    h3 {
      color: blue;
    }
  `] */
})
export class AppComponent {
  username: string = '';
  showSecret = false;
  logs = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
