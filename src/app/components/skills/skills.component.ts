import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { SkillCategory } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skills: SkillCategory[] = [];
}
