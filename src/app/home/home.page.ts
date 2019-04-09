import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += .1;
    }, 1000)
  }
}
