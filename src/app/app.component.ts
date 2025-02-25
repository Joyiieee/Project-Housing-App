import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent, HomeComponent, RouterModule],
  template: `
    <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
      <img class="brand-logo" src="assets/Hiraya_Logo.webp" height="100px" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-project';
}