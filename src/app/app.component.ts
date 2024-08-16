import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { TitleComponent } from './components/utils/title/title.component';
import { ContacsComponent } from './components/contacs/contacs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, PrincipalComponent, FooterComponent, IntroduccionComponent, ProjectsComponent,
    TitleComponent, ContacsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
