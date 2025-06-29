export interface Topic {
  id: string;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed';
  notes: string;
  resources: Resource[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Resource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'video' | 'article';
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: Topic[];
  color: string;
}

export interface UserProgress {
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  completionPercentage: number;
  categoryProgress: Array<{
    categoryId: string;
    completed: number;
    total: number;
    percentage: number;
  }>;
}