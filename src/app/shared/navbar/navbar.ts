import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="h-16 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center px-4">
  <span class="font-semibold text-lg">Stats App</span>
  <div class="ml-auto">
    <button
      class="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
      (click)="toggleDarkMode()">
      {{ isDark ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent {
  private document = inject(DOCUMENT);


  isDark = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    const htmlEl = this.document.documentElement;

    if (this.isDark) {
      htmlEl.classList.add('dark');   // tailwind applies dark:* classes
    } else {
      htmlEl.classList.remove('dark'); // revert to light
    }
  }
}
