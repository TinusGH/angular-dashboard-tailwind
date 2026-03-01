import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <aside class="w-52 bg-gray-100 dark:bg-gray-800 p-4 h-screen text-gray-900 dark:text-gray-100">
      <ul class="list-none p-0">
        <li>
          <a routerLink="/" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a routerLink="/users" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Users Table
          </a>
        </li>
        <li>
          <a routerLink="/stats" class="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Project Stats
          </a>
        </li>
      </ul>
    </aside>
  `,
  styles: []
})
export class SidebarComponent {}
