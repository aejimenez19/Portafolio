import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="w-full bg-white dark:bg-surface-container border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div class="max-w-container-max mx-auto px-margin-md py-margin-md flex flex-col md:flex-row justify-between items-center gap-element-gap">
        <span class="font-label-mono text-label-mono font-bold text-black dark:text-white">
          © 2026 ALVARO JIMENEZ | BACKEND DEVELOPER & SYSTEMS ENGINEER
        </span>
        <div class="flex gap-element-gap">
          <a class="font-label-mono text-label-mono text-gray-500 dark:text-gray-400 font-bold hover:text-black dark:hover:text-white transition-opacity" href="https://github.com/aejimenez19" target="_blank">
            GITHUB
          </a>
          <a class="font-label-mono text-label-mono text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="https://www.linkedin.com/in/alvaro-jimenez-dev/" target="_blank">
            LINKEDIN
          </a>
          <a class="font-label-mono text-label-mono text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="#">
            DOCS
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class FooterComponent { }
