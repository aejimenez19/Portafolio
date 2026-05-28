import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section class="flex flex-col gap-margin-md max-w-2xl" id="contact">
      <app-section-title title="Initialize Connection" />
      <form class="flex flex-col gap-6" (ngSubmit)="onSubmit()">
        <div class="flex flex-col gap-2">
          <label class="font-label-mono text-label-mono text-black dark:text-white" for="name">Name</label>
          <input
            class="w-full bg-transparent border border-gray-200 dark:border-gray-700 p-3 font-body-md text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-colors"
            id="name"
            type="text"
            placeholder="Your full name" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-label-mono text-label-mono text-black dark:text-white" for="email">Email</label>
          <input
            class="w-full bg-transparent border border-gray-200 dark:border-gray-700 p-3 font-body-md text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-colors"
            id="email"
            type="email"
            placeholder="system.admin@domain.com" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-label-mono text-label-mono text-black dark:text-white" for="comment">Comment</label>
          <textarea
            class="w-full bg-transparent border border-gray-200 dark:border-gray-700 p-3 font-body-md text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none resize-none transition-colors"
            id="comment"
            placeholder="// Input message payload here..."
            rows="5"></textarea>
        </div>
        <button class="button-primary font-label-mono text-label-mono px-8 py-4 self-start mt-4 border border-transparent" type="submit">
          TRANSMIT
        </button>
      </form>
    </section>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class ContactSectionComponent {
  onSubmit(): void {
    // TODO: Implement form submission
    console.log('Form submitted');
  }
}
