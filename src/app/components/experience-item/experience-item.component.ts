import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Experience } from '../../models/experience.interface';

@Component({
  selector: 'app-experience-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col md:flex-row gap-4 md:gap-12">
      <div class="md:w-1/4">
        <p class="font-label-mono text-label-mono text-black dark:text-white font-bold">
          {{ experience().period }}
        </p>
        <p class="font-body-md text-body-md text-gray-500 dark:text-gray-400">
          {{ experience().company }}
        </p>
      </div>
      <div class="md:w-3/4 flex flex-col gap-4">
        <h3 class="font-headline-md text-xl text-black dark:text-white">
          {{ experience().role }}
        </h3>
        <ul class="list-none space-y-3">
          @for (ach of experience().achievements; track ach) {
            <li class="font-body-md text-body-md text-black dark:text-white flex items-start">
              <span class="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-white"></span>
              <span>{{ ach }}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class ExperienceItemComponent {
  experience = input.required<Experience>();
}