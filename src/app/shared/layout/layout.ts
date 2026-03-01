import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  template: `
    <app-navbar></app-navbar>
<div class="flex">
  <app-sidebar></app-sidebar>
  <main class="flex-1 p-4 bg-gray-50 dark:bg-gray-900 transition-colors">
    <router-outlet></router-outlet>
  </main>
</div>
  `,
  styles: []
})
export class LayoutComponent { }
