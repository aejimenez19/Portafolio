import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
      <h2 class="font-headline-md text-headline-md text-black dark:text-white">
        {{ title() }}
      </h2>
    </div>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class SectionTitleComponent {
  title = input.required<string>();
}