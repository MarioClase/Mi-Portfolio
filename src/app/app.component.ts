import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-front';
}
