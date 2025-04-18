export interface ProjectLink {
  type: 'github' | 'live';
  url: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  completionDate?: string;
  metrics?: ProjectMetric[];
  image?: string;
  links?: ProjectLink[];
} 