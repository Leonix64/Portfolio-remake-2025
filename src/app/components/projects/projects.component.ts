import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
  activeFilter = 'all';

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
