import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-section-gap flex flex-col gap-element-gap items-start max-w-3xl" id="about">
      <h1 class="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-black dark:text-white">
        Engineered for Stability.
      </h1>
      <p class="font-body-lg text-body-lg text-black dark:text-white max-w-2xl">
        Passionate engineer specializing in robust backend architectures and scalable systems.
        Dedicated to writing clean, maintainable code and solving complex technical challenges with elegant solutions.
      </p>
      <div class="flex gap-4 mt-8">
        <a class="button-primary font-label-mono text-label-mono" href="#projects">
          VIEW WORK
        </a>
        <a class="button-secondary font-label-mono text-label-mono" href="#contact">
          GET IN TOUCH
        </a>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class HeroSectionComponent {}