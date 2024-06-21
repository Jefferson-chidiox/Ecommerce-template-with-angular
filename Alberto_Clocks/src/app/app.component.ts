import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLinkActive, RouterLink],
})
export class AppComponent {
  title = 'ecommerceangular';
}