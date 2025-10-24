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
