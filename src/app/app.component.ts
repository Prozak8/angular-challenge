import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Weekend Challenge';
  videos = [
    {title: 'Rick Roll', views: 119119, liked: true},
    {title: 'Great video really good', views: 1, liked: true}
  ]

  handleClick(){
    console.log('Someone clicked on button on the template :-)')
  }
}