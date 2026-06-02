import { Injectable, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);

  isDark = signal(false);

  constructor() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark.set(true);
      this.document.documentElement.classList.add('dark');
    }

    effect(() => {
      if (this.isDark()) {
        this.document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        this.document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }
}