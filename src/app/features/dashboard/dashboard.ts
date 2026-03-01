import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styles: [],
  standalone: true,
  imports: [
    CommonModule,
    StatCardComponent
  ]
})
export class DashboardComponent {
  cards = [
    { title: 'Users', value: '1,245' },
    { title: 'Revenue', value: '$32,400' },
    { title: 'Orders', value: '320' },
    { title: 'Extra Card 1', value: 'Value 1' },
    { title: 'Extra Card 2', value: 'Value 2' }
  ];
  // Function to randomly change values
  refreshStats() {
    this.cards = this.cards.map(card => {
      let randomValue: string;

      switch (card.title) {
        case 'Users':
          randomValue = Math.floor(Math.random() * 2000 + 500).toString();
          break;
        case 'Revenue':
          randomValue = `$${Math.floor(Math.random() * 50000 + 10000)}`;
          break;
        case 'Orders':
          randomValue = Math.floor(Math.random() * 500 + 50).toString();
          break;
        default:
          randomValue = `Value ${Math.floor(Math.random() * 100)}`;
      }

      return { ...card, value: randomValue };
    });
  }
}
