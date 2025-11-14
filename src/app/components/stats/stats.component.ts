import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { Stat } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  @Input() stats: Stat[] = [];

  trackByStatId(index: number, stat: Stat): number {
    return stat.id;
  }
}
