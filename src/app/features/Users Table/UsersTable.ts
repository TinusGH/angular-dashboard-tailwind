import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-gray-50 dark:bg-gray-900 transition-colors min-h-full">
      <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Users Table</h1>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800 shadow rounded text-gray-900 dark:text-gray-100">
  <thead class="bg-gray-100 dark:bg-gray-700">
    <tr>
      <th class="py-2 px-4">ID</th>
      <th class="py-2 px-4">Name</th>
      <th class="py-2 px-4">Email</th>
      <th class="py-2 px-4">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users" class="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td class="py-2 px-4">{{ user.id }}</td>
      <td class="py-2 px-4">{{ user.name }}</td>
      <td class="py-2 px-4">{{ user.email }}</td>
      <td class="py-2 px-4">{{ user.role }}</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  `
})
export class UsersTableComponent {
  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
    { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Manager' },
  ];
}
