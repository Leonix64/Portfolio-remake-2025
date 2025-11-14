export interface Stat {
    id: number;
    icon: string;
    value: string;
    label: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    language: string;
    demoUrl: string;
    sourceUrl: string;
    category: string;
    featured?: boolean;
    tags: string[];
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
}

export interface Strength {
    name: string;
    icon: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    icon: string;
    level?: number;
}

export interface DiverseExperience {
    id: number;
    title: string;
    organization: string;
    period: string;
    type: 'volunteer' | 'leadership' | 'hobby' | 'certification';
    typeLabel: string;
    description: string[];
    icon: string;
    skills?: string[];
}
