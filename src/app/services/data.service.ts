import { Injectable } from '@angular/core';
import { Stat, Project, Experience, Education, Strength, SkillCategory, DiverseExperience } from '../interfaces/portfolio.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    getStats(): Stat[] {
        return [
            { id: 1, icon: 'code-slash', value: '7+', label: 'Proyectos Completados' },
            { id: 2, icon: 'briefcase', value: '3', label: 'Prácticas Profesionales' },
            { id: 3, icon: 'trophy', value: '10+', label: 'Tecnologías Dominadas' },
            { id: 4, icon: 'people', value: '3', label: 'Empresas' }
        ];
    }

    getEducation(): Education[] {
        return [
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
    }

    getExperiences(): Experience[] {
        return [
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
    }

    getProjects(): Project[] {
        return [
            {
                id: 1,
                title: 'Lyra QR',
                description: 'Bot de Discord especializado en generación de códigos QR.',
                imageUrl: '../../assets/images/projects/LyraQR.webp',
                language: 'Python, Discord API',
                demoUrl: '',
                sourceUrl: 'https://github.com/Leonix64/Lyra',
                category: 'ai',
                featured: true,
                tags: ['Python', 'Discord API']
            },
            {
                id: 2,
                title: 'RainFlow',
                description: 'IA para generación de mapas que determina ubicación óptima para presas.',
                imageUrl: '../../assets/images/projects/RainFlow.webp',
                language: 'Python, Machine Learning',
                demoUrl: '',
                sourceUrl: 'https://github.com/Leonix64/RainFlow.git',
                category: 'ai',
                tags: ['Python', 'Machine Learning']
            },
            {
                id: 3,
                title: 'Nieve de Garrafa',
                description: 'Sitio web promocional para negocio móvil de nieve raspada.',
                imageUrl: '../../assets/images/projects/NieveGarrafa.webp',
                language: 'Ionic, Angular, TypeScript',
                demoUrl: '',
                sourceUrl: 'https://github.com/Leonix64/NieveGarrafa',
                category: 'web',
                tags: ['Ionic', 'Angular', 'TypeScript']
            },
            {
                id: 4,
                title: 'Gestor de Citas Psiquiátricas',
                description: 'Aplicación web completa para gestión de citas y seguimiento de pacientes.',
                imageUrl: '../../assets/images/projects/GestorCitas.webp',
                language: 'Ionic, Angular, TypeScript',
                demoUrl: '',
                sourceUrl: 'https://github.com/Leonix64/SaludMental_Front.git',
                category: 'web',
                tags: ['Ionic', 'Angular', 'TypeScript']
            },
            {
                id: 5,
                title: 'Generador de Contraseñas',
                description: 'Herramienta de seguridad que genera contraseñas seguras.',
                imageUrl: '../../assets/images/projects/Contrasena.webp',
                language: 'Python',
                demoUrl: '',
                sourceUrl: 'https://github.com/Leonix64/Password_Generator.git',
                category: 'tools',
                tags: ['Python', 'Seguridad']
            }
        ];
    }

    getStrengths(): Strength[] {
        return [
            { name: 'Diseño de Marca', icon: 'color-palette-outline' },
            { name: 'UI/UX', icon: 'layers' },
            { name: 'Responsable', icon: 'shield-checkmark' },
            { name: 'Programación Web', icon: 'code-outline' },
            { name: 'Trabajo en Equipo', icon: 'people' }
        ];
    }

    getSkills(): SkillCategory[] {
        return [
            {
                title: 'Frontend',
                skills: [
                    { name: 'Angular', icon: 'logo-angular' },
                    { name: 'Ionic', icon: 'logo-ionic' },
                    { name: 'HTML5', icon: 'document-text-outline' },
                    { name: 'CSS/SCSS', icon: 'color-palette-outline' },
                    { name: 'JavaScript', icon: 'logo-javascript' },
                    { name: 'TypeScript', icon: 'code-slash' }
                ]
            },
            {
                title: 'Backend',
                skills: [
                    { name: 'Node.js', icon: 'logo-nodejs' },
                    { name: 'Python', icon: 'logo-python' },
                    { name: 'PHP', icon: 'code-download-sharp' },
                    { name: 'Java SpringBoot', icon: 'cafe-outline' },
                    { name: 'Go', icon: 'terminal-outline' }
                ]
            },
            {
                title: 'Bases de Datos',
                skills: [
                    { name: 'MySQL', icon: 'server-outline' },
                    { name: 'PostgreSQL', icon: 'server' }
                ]
            },
            {
                title: 'Herramientas',
                skills: [
                    { name: 'Git', icon: 'logo-github' },
                    { name: 'Postman', icon: 'cube-outline' }
                ]
            }
        ];
    }

    getDiverseExperiences(): DiverseExperience[] {
        return [
            {
                id: 1,
                title: 'Líder de Grupo Estudiantil',
                organization: 'Universidad Politécnica de Durango',
                period: '2021 - 2022',
                type: 'leadership',
                typeLabel: 'Liderazgo',
                description: [
                    'Coordinación de eventos tecnológicos para 100+ estudiantes',
                    'Organización de talleres de programación',
                    'Mentoría a estudiantes de primeros semestres'
                ],
                icon: 'people',
                skills: ['Liderazgo', 'Organización', 'Comunicación']
            },
            {
                id: 2,
                title: 'Voluntario en Campaña Ambiental',
                organization: 'Ecología Municipal de Durango',
                period: '2020',
                type: 'volunteer',
                typeLabel: 'Voluntariado',
                description: [
                    'Participación en reforestación de áreas públicas',
                    'Coordinación de equipos de limpieza',
                    'Promoción de conciencia ambiental'
                ],
                icon: 'leaf',
                skills: ['Trabajo en equipo', 'Responsabilidad social']
            },
            {
                id: 3,
                title: 'Instructor de Talleres de Programación',
                organization: 'Comunidad Tech Local',
                period: '2022 - Presente',
                type: 'volunteer',
                typeLabel: 'Enseñanza',
                description: [
                    'Impartición de talleres de Python para principiantes',
                    'Creación de material educativo',
                    'Mentoría en proyectos de código abierto'
                ],
                icon: 'school',
                skills: ['Enseñanza', 'Python', 'Comunicación técnica']
            }
        ];
    }
}
