import React from 'react';

interface DifficultyBadgeProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const getConfig = () => {
    switch (difficulty) {
      case 'beginner':
        return {
          label: 'Beginner',
          className: 'bg-blue-100 text-blue-800 border border-blue-200'
        };
      case 'intermediate':
        return {
          label: 'Intermediate',
          className: 'bg-orange-100 text-orange-800 border border-orange-200'
        };
      case 'advanced':
        return {
          label: 'Advanced',
          className: 'bg-red-100 text-red-800 border border-red-200'
        };
    }
  };

  const config = getConfig();

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}