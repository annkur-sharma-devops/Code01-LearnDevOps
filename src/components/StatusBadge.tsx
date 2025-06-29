import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'not-started' | 'in-progress' | 'completed';
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completed',
          icon: CheckCircle,
          className: 'bg-green-100 text-green-800 border border-green-200'
        };
      case 'in-progress':
        return {
          label: 'In Progress',
          icon: Clock,
          className: 'bg-yellow-100 text-yellow-800 border border-yellow-200'
        };
      default:
        return {
          label: 'Not Started',
          icon: Circle,
          className: 'bg-gray-100 text-gray-600 border border-gray-200'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center space-x-1 rounded-full font-medium ${sizeClasses[size]} ${config.className}`}>
      <Icon className={iconSizes[size]} />
      <span>{config.label}</span>
    </span>
  );
}