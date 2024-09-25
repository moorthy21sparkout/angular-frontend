import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockchainViewComponent } from "./blockchain-view/blockchain-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlockchainViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';
}
