import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  menu, close, arrowForward, chevronDown, chevronBack, chevronForward,
  eye, logoGithub, person, codeSlash, briefcase, trophy, people,
  logoAngular, logoJavascript, logoReact, logoNodejs, logoPython,
  mail, callOutline, mailOutline, globeOutline, serverOutline,
  filmOutline, constructOutline, peopleOutline, checkmarkCircleOutline,
  colorPaletteOutline, phonePortraitOutline, openOutline,
  school, shieldCheckmark, layers, location
} from 'ionicons/icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

// Importar interfaces
import { Stat } from '../interfaces/stat';
import { Project } from '../interfaces/project';
import { Experience } from '../interfaces/experience';
import { Education } from '../interfaces/education';

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
  @ViewChild(IonContent) content!: IonContent;

  mobileMenuOpen = false;
  activeSection = 'home';
  currentProjectIndex = 0;
  activeFilter = 'all';

  // Stats Data
  stats: Stat[] = [
    {
      id: 1,
      icon: 'code-slash',
      value: '7+',
      label: 'Proyectos Completados'
    },
    {
      id: 2,
      icon: 'briefcase',
      value: '3',
      label: 'Prácticas Profesionales'
    },
    {
      id: 3,
      icon: 'trophy',
      value: '10+',
      label: 'Tecnologías Dominadas'
    },
    {
      id: 4,
      icon: 'people',
      value: '3',
      label: 'Empresas'
    }
  ];

  // Education Data
  education: Education[] = [
    {
      id: 1,
      degree: 'Ingeniería en Software',
      institution: 'Universidad Politécnica de Durango',
      period: '2020 - 2023'
    },
    {
      id: 2,
      degree: 'Técnico en Soporte y Mantenimiento de Equipos de Cómputo',
      institution: 'Preparatoria CETIS 148',
      period: '2017 - 2020'
    }
  ];

  // Experience Data
  experiences: Experience[] = [
    {
      id: 1,
      title: 'Desarrollador FullStack',
      company: 'Cconor Soluciones Tecnológicas',
      period: 'Jun 2024 - Ago 2024',
      description: [
        'Desarrollo de API REST con Node.js',
        'Frontend con Angular',
        'Manejo de Git y Postman'
      ],
      technologies: ['Node.js', 'Angular', 'Git', 'Postman']
    },
    {
      id: 2,
      title: 'Desarrollador FullStack Internship III',
      company: 'WorkNest',
      period: 'Sep 2023 - Dic 2023',
      description: [
        'Desarrollo FrontEnd con Ionic y Angular',
        'BackEnd en SpringBoot (Java) y Go',
        'Manejo de PostgreSQL'
      ],
      technologies: ['Ionic', 'Angular', 'SpringBoot', 'Go', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Desarrollador FullStack Internship I - II',
      company: 'Tacos Pelao\'s',
      period: 'Mayo 2022 - Ago 2022',
      description: [
        'Desarrollo y diseño de aplicación',
        'BackEnd en PHP',
        'Modelos relacionales en MySQL'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript']
    }
  ];

  // Projects Data
  projects: Project[] = [
    {
      id: 1,
      title: 'Lyra QR',
      description: 'Bot de Discord especializado en generación de códigos QR. Este asistente fue creado específicamente para integrarse en Discord y tiene una característica destacada: cuando un usuario ingresa texto de su elección, el asistente crea una imagen con un código QR personalizado.',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python, Discord API',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/Lyra',
      category: 'ai',
      tags: ['Python', 'Discord API']
    },
    {
      id: 2,
      title: 'RainFlow',
      description: 'Inteligencia artificial para generación de mapas que determina la ubicación óptima para construir presas. El sistema analiza condiciones climáticas que favorecen el aumento del flujo de agua, utilizando algoritmos de machine learning para predecir las mejores zonas.',
      imageUrl: '../../assets/MapaPresas.png',
      language: 'Python, Machine Learning, GIS',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/RainFlow.git',
      category: 'ai',
      tags: ['Python', 'Machine Learning', 'GIS']
    },
    {
      id: 3,
      title: 'Nieve de Garrafa',
      description: 'Sitio web promocional para un negocio móvil de venta de nieve raspada. Diseño responsive y moderno que presenta los productos, ubicaciones y contacto del negocio de manera atractiva para clientes potenciales.',
      imageUrl: '../../assets/NieveGarrafa.png',
      language: 'Ionic, Angular, TypeScript',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/NieveGarrafa',
      category: 'mobile',
      tags: ['Ionic', 'Angular', 'TypeScript']
    },
    {
      id: 4,
      title: 'Gestor de Citas Psiquiátricas',
      description: 'Aplicación web completa para la gestión de citas y seguimiento de pacientes en una clínica de salud mental. Incluye calendario de citas, historiales médicos, gestión de tratamientos y sistema de notificaciones para recordatorios.',
      imageUrl: '../../assets/GestorCitas.png',
      language: 'Ionic, Angular, TypeScript',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/SaludMental_Front.git',
      category: 'web',
      featured: true,
      tags: ['Ionic', 'Angular', 'TypeScript']
    },
    {
      id: 5,
      title: 'Generador de Contraseñas',
      description: 'Herramienta de seguridad que genera contraseñas seguras de longitud variable. Calcula la entropía de las contraseñas, estima el tiempo requerido para descifrarlas por fuerza bruta y proporciona consejos de seguridad para proteger cuentas en línea.',
      imageUrl: '../../assets/Contrasena.png',
      language: 'Python',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/Password_Generator.git',
      category: 'tools',
      tags: ['Python', 'Seguridad']
    },
    {
      id: 6,
      title: 'POS - Sistema Punto de Venta',
      description: 'Desarrollo de proyectos personalizados para empresas de diferentes sectores. Sistema punto de venta moderno con gestión de inventario, ventas, reportes y análisis. El objetivo es hacer la tecnología web accesible para los socios de Cconor.',
      imageUrl: '../../assets/POS-cafe.png',
      language: 'Angular, Node.js',
      demoUrl: '',
      sourceUrl: 'https://github.com/EdyFJR/CconorTeam',
      category: 'web',
      tags: ['Angular', 'Node.js']
    },
    {
      id: 7,
      title: 'FinTrack',
      description: 'Aplicación de finanzas personales para llevar un seguimiento detallado de ingresos y gastos. Incluye categorización automática, gráficos de análisis, presupuestos mensuales y reportes financieros para mejor control del dinero.',
      imageUrl: '../../assets/FinTrack.png',
      language: 'Angular, TypeScript',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/FinTrack.git',
      category: 'web',
      tags: ['Angular', 'TypeScript']
    }
  ];

  // Strengths Data
  strengths = [
    { name: 'Diseño de Marca', icon: 'color-palette' },
    { name: 'UI/UX', icon: 'layers' },
    { name: 'Responsable', icon: 'shield-checkmark' },
    { name: 'Programación Web', icon: 'code' },
    { name: 'Trabajo en Equipo', icon: 'people' }
  ];

  private animationInterval: any;
  private scrollListener: any;

  constructor() {
    addIcons({
      menu,
      close,
      arrowForward,
      chevronDown,
      chevronBack,
      chevronForward,
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
      logoPython,
      callOutline,
      mailOutline,
      globeOutline,
      serverOutline,
      filmOutline,
      constructOutline,
      peopleOutline,
      checkmarkCircleOutline,
      colorPaletteOutline,
      phonePortraitOutline,
      openOutline,
      school,
      shieldCheckmark,
      layers,
      location
    });
  }

  ngOnInit() {
    this.startFloatingAnimation();
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    if (this.scrollListener) {
      this.scrollListener();
    }
  }

  async scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset para el header fijo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      await this.content.scrollToPoint(0, y, 800);
      this.activeSection = sectionId;
    }
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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  filterProjects(category: string) {
    this.activeFilter = category;

    // Actualizar botones activos
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      if (btn.textContent?.toLowerCase().includes(category) || (category === 'all' && btn.textContent?.includes('Todos'))) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filtrar proyectos
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
      if (category === 'all' || project.getAttribute('data-category') === category) {
        (project as HTMLElement).style.display = 'block';
      } else {
        (project as HTMLElement).style.display = 'none';
      }
    });
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  trackByStatId(index: number, stat: Stat): number {
    return stat.id;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  trackByExperienceId(index: number, experience: Experience): number {
    return experience.id;
  }

  trackByEducationId(index: number, education: Education): number {
    return education.id;
  }

  private startFloatingAnimation() {
    this.animationInterval = setInterval(() => {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape) => {
        const randomY = Math.random() * 20 - 10;
        const randomX = Math.random() * 10 - 5;
        (shape as HTMLElement).style.transform = `translate(${randomX}px, ${randomY}px)`;
      });
    }, 3000);
  }
}
