import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menu, close, arrowForward, chevronDown, eye, logoGithub, person, codeSlash, briefcase, trophy, people, logoAngular, logoJavascript, logoReact, logoNodejs, logoPython, logoFirebase, mail } from 'ionicons/icons';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { Stat } from '../interface/stat';
import { Skill } from '../interface/skill';
import { FeaturedProject } from '../interface/featured-project';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonContent, IonButton, IonIcon],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(600)
      ])
    ]),
    trigger('slideInRight', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms ease-out')
      ])
    ]),
    trigger('scaleIn', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('floatIn', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out')
      ])
    ]),
    trigger('bounce', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        animate('1s ease-in-out', style({ transform: 'translateY(-10px)' })),
        animate('1s ease-in-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomePage implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  stats: Stat[] = [
    {
      id: 1,
      icon: 'code-slash',
      value: '50+',
      label: 'Proyectos Completados'
    },
    {
      id: 2,
      icon: 'briefcase',
      value: '3+',
      label: 'Años de Experiencia'
    },
    {
      id: 3,
      icon: 'trophy',
      value: '25+',
      label: 'Teconologías Dominadas'
    },
    {
      id: 4,
      icon: 'people',
      value: '100+',
      label: 'Clientes Satisfechos'
    }
  ];

  // Proyectos destacados para el preview
  featuredProjects: FeaturedProject[] = [
    {
      id: 1,
      title: 'Gestor de Tareas',
      description: 'Aplicación web para gestionar tareas diarias con autenticación y notificaciones.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
    }
  ];

  // Solo las tecnologías mas importantes (ninguna :c)
  topSkills = [
    { name: 'Angular', icon: 'logo-angular' },
    { name: 'TypeScript', icon: 'logo-javascript' },
    { name: 'Node.Js', icon: 'logo-nodejs' },
  ];

  private animationInterval: any;

  constructor() {
    addIcons({
      menu,
      close,
      arrowForward,
      chevronDown,
      person,
      codeSlash,
      briefcase,
      trophy,
      people,
      eye,
      logoGithub,
      logoAngular,
      logoJavascript,
      logoReact,
      mail,
      logoNodejs,
    });
  }

  ngOnInit() {
    this.startFloatingAnimation();
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  trackByStatId(index: number, stat: Stat): number {
    return stat.id;
  }

  trackByprojectId(index: number, project: FeaturedProject): number {
    return project.id;
  }

  private startFloatingAnimation() {
    // Animacion continua para las formas flotantes
    this.animationInterval = setInterval(() => {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape) => {
        const randomY = Math.random() * 20 - 10; // Movimiento aleatorio en Y
        const randomX = Math.random() * 10 - 5; // Movimiento aleatorio en X
        (shape as HTMLElement).style.transform = `traslate(${randomX}px, ${randomY}px)`;
      });
    }, 3000);
  }
}
