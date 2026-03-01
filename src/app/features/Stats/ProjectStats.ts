import { Component } from '@angular/core';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-stats',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  template: `
    <div class="p-6 bg-gray-50 dark:bg-gray-900 transition-colors min-h-full">
      <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Project Stats</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <app-stat-card *ngFor="let stat of stats" [title]="stat.title" [value]="stat.value"></app-stat-card>
</div>
  `
})
export class ProjectStatsComponent {
  stats = [
    { title: 'Projects', value: '12' },
    { title: 'Tasks', value: '87' },
    { title: 'Completed', value: '45' },
    { title: 'Pending', value: '42' },
  ];
}
