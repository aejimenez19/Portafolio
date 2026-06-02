import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TechStackItem } from '../../models/tech-stack.interface';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'flex flex-col items-center justify-center p-8 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 aspect-square cursor-default',
  },
  template: `
    <span class="material-symbols-outlined text-4xl mb-4 text-gray-700 dark:text-gray-300"
          style="font-variation-settings: 'FILL' 0;">
      {{ item().icon }}
    </span>
    <span class="font-label-mono text-label-mono font-bold text-black dark:text-white text-center">
      {{ item().label }}
    </span>
  `,
})
export class TechIconComponent {
  item = input.required<TechStackItem>();
}
