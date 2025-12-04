import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { TitleComponent } from './components/utils/title/title.component';
import { ContacsComponent } from './components/contacs/contacs.component';
import { TecnologiasComponent } from "./components/tecnologias/tecnologias.component";
import { ExperienceComponent } from './components/experience/experience.component';
import { ScrollTopComponent } from './components/utils/scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HeroComponent, FooterComponent, IntroduccionComponent, ProjectsComponent,
    TitleComponent, ContacsComponent, TecnologiasComponent, ExperienceComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
