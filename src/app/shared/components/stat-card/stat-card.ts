import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule], // for *ngIf
  template: `
    <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 shadow rounded transition-colors">
  <h2 class="text-lg font-semibold">{{ title }}</h2>
  <p class="text-2xl font-bold mt-2">
    {{ value }}
    <span *ngIf="isHighRevenue()" class="text-green-500 ml-1">🔥</span>
  </p>
</div>
  `
})
export class StatCardComponent {
  @Input() title!: string;
  @Input() value!: string;

  isHighRevenue(): boolean {
    if (this.title === 'Revenue') {
      const numeric = parseInt(this.value.replace(/\D/g, ''), 10);
      return numeric > 40000;
    }
    return false;
  }
}
