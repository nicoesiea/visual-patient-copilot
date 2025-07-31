import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visual-patient-copilot';

  constructor() {
    console.log('AppComponent loaded');
  }

  // Add methods to handle events and manage component state here
  handleClick() {
    // Ajoutez ici le comportement souhaité
    alert('Get Started clicked!');
  }
}