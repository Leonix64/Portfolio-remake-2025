import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { Education, Experience, Strength, } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  activeTab: 'professional' | 'other' = 'professional';

  @Input() education: Education[] = [];
  @Input() experiences: Experience[] = [];
  @Input() strengths: Strength[] = [];
  @Input() otherExperiences: any[] = [];

  trackByEducationId(index: number, education: Education): number {
    return education.id;
  }

  trackByExperienceId(index: number, experience: Experience): number {
    return experience.id;
  }
}
