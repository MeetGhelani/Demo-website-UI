import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { WebDevelopment } from './components/web-development/web-development';
import { MobileApps } from './components/mobile-apps/mobile-apps';
import { UiUx } from './components/ui-ux/ui-ux';
import { Consulting } from './components/consulting/consulting';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,RouterLink, HomePage, WebDevelopment, MobileApps, UiUx, Consulting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
