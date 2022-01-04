import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  authorName = "Magesh";

  constructor(){
    setTimeout(() => {
      this.title = "Angular App";
      this.authorName = "Suresh Kumar";
    }, 5000);
  }
}
