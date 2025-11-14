import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  menu, close, arrowForward, chevronDown, chevronBack, chevronForward,
  eye, logoGithub, person, codeSlash, briefcase, trophy, people,
  logoAngular, logoJavascript, logoReact, logoNodejs, logoPython,
  mail, callOutline, mailOutline, globeOutline, serverOutline,
  filmOutline, constructOutline, peopleOutline, checkmarkCircleOutline,
  colorPaletteOutline, phonePortraitOutline, openOutline,
  school, shieldCheckmark, layers, location, codeOutline, logoIonic,
  logoHtml5, logoCss3, chatbubbleOutline, folderOpen, send,
  documentTextOutline, codeWorkingOutline, cafeOutline, flashOutline,
  server, sendOutline, terminalOutline, codeDownloadSharp, cubeOutline
} from 'ionicons/icons';

// Components
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { StatsComponent } from '../components/stats/stats.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

// Services
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonContent,
    HeaderComponent, HeroComponent, StatsComponent, AboutComponent,
    ProjectsComponent, SkillsComponent, ContactComponent, FooterComponent]
})

export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content!: IonContent;

  mobileMenuOpen = false;
  activeSection = 'home';

  // Data from service
  stats = this.dataService.getStats();
  education = this.dataService.getEducation();
  experiences = this.dataService.getExperiences();
  projects = this.dataService.getProjects();
  strengths = this.dataService.getStrengths();
  skills = this.dataService.getSkills();

  private scrollListener: any;

  constructor(private dataService: DataService) {
    addIcons({
      menu, close, arrowForward, chevronDown, chevronBack, chevronForward,
      person, codeSlash, briefcase, trophy, people, eye, logoGithub,
      logoAngular, logoJavascript, logoReact, mail, logoNodejs, logoPython,
      callOutline, mailOutline, globeOutline, serverOutline, filmOutline,
      constructOutline, peopleOutline, checkmarkCircleOutline,
      colorPaletteOutline, phonePortraitOutline, openOutline,
      school, shieldCheckmark, layers, location, codeOutline, logoIonic,
      logoHtml5, logoCss3, chatbubbleOutline, folderOpen, send, documentTextOutline,
      codeWorkingOutline, cafeOutline, flashOutline, server, sendOutline, terminalOutline, codeDownloadSharp,
      cubeOutline
    });
  }

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  async scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      await this.content.scrollToPoint(0, y, 800);
      this.activeSection = sectionId;
    }
  }

  onToggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private setupScrollListener() {
    this.content.ionScroll.subscribe((event: any) => {
      const scrollTop = event.detail.scrollTop;
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            this.activeSection = section;
            break;
          }
        }
      }
    });
  }

  // TrackBy functions
  trackByStatId(index: number, stat: any): number {
    return stat.id;
  }

  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  trackByExperienceId(index: number, experience: any): number {
    return experience.id;
  }

  trackByEducationId(index: number, education: any): number {
    return education.id;
  }
}
