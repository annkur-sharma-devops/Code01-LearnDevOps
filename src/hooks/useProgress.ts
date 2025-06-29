import { useMemo } from 'react';
import { Category, UserProgress } from '../types';

export function useProgress(categories: Category[]): UserProgress {
  return useMemo(() => {
    const allTopics = categories.flatMap(category => category.topics);
    const totalTopics = allTopics.length;
    const completedTopics = allTopics.filter(topic => topic.status === 'completed').length;
    const inProgressTopics = allTopics.filter(topic => topic.status === 'in-progress').length;
    const completionPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    const categoryProgress = categories.map(category => {
      const completed = category.topics.filter(topic => topic.status === 'completed').length;
      const total = category.topics.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return {
        categoryId: category.id,
        completed,
        total,
        percentage
      };
    });

    return {
      totalTopics,
      completedTopics,
      inProgressTopics,
      completionPercentage,
      categoryProgress
    };
  }, [categories]);
}