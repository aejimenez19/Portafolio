import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { StackSectionComponent } from './components/stack-section/stack-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component'
import { PROJECTS } from './data/projects.data';
import { TECH_STACK } from './data/tech-stack.data';
import { EXPERIENCES } from './data/experience.data';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TopAppBarComponent,
    HeroSectionComponent,
    ProjectsSectionComponent,
    StackSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  template: `
    <div class="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <header>
        <app-top-app-bar />
      </header>
      <main class="flex-grow w-full max-w-container-max mx-auto px-margin-md md:px-margin-lg pt-margin-lg pb-section-gap flex flex-col gap-section-gap">
        <app-hero-section />
        <app-stack-section [techStack]="techStack" />
        <app-projects-section [projects]="projects" />
        <app-experience-section [experiences]="experiences" />
        <app-contact-section />
      </main>
      <footer>
        <app-footer />
      </footer>
    </div>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class AppComponent {
  projects = PROJECTS;
  techStack = TECH_STACK;
  experiences = EXPERIENCES;
}
