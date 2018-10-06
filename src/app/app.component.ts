import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Weekend Challenge';
  video = {
    title: 'Rick Roll',
    views: 119119119,
    liked: true
  }
  handleClick(){
    console.log('Someone clicked on button on the template :-)')
  }
}
