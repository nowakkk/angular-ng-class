import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-class-practise';

  compAClicked: boolean = false;
  compBClicked: boolean = false;

  clickA() {
    this.compAClicked = !this.compAClicked;
  }

  clickB() {
    this.compBClicked = !this.compBClicked;
  }
}
