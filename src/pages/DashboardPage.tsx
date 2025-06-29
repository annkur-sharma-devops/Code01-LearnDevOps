import React from 'react';
import { TrendingUp, BookOpen, Clock, CheckCircle, Target, Award } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useProgress } from '../hooks/useProgress';
import { syllabusData as initialSyllabusData } from '../data/syllabusData';

export function DashboardPage() {
  const [syllabusData] = useLocalStorage('syllabus-data', initialSyllabusData);
  const progress = useProgress(syllabusData);

  // Get next recommended topics
  const getNextTopics = () => {
    const allTopics = syllabusData.flatMap(category => 
      category.topics.map(topic => ({ ...topic, categoryTitle: category.title, categoryId: category.id }))
    );
    
    const inProgressTopics = allTopics.filter(topic => topic.status === 'in-progress');
    const notStartedTopics = allTopics.filter(topic => topic.status === 'not-started');
    
    return [...inProgressTopics, ...notStartedTopics].slice(0, 3);
  };

  const nextTopics = getNextTopics();

  // Recent activity (topics marked as completed)
  const getRecentActivity = () => {
    const allTopics = syllabusData.flatMap(category => 
      category.topics.map(topic => ({ ...topic, categoryTitle: category.title }))
    );
    
    return allTopics
      .filter(topic => topic.status === 'completed')
      .slice(-5)
      .reverse();
  };

  const recentActivity = getRecentActivity();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Learning Dashboard
        </h1>
        <p className="text-xl text-gray-600">
          Track your progress and stay motivated on your Azure DevOps learning journey.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Progress</p>
              <p className="text-3xl font-bold text-gray-900">{progress.completionPercentage}%</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar percentage={progress.completionPercentage} showLabel={false} />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900">{progress.completedTopics}</p>
              <p className="text-xs text-gray-500">of {progress.totalTopics} topics</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-3xl font-bold text-gray-900">{progress.inProgressTopics}</p>
              <p className="text-xs text-gray-500">active topics</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Remaining</p>
              <p className="text-3xl font-bold text-gray-900">{progress.totalTopics - progress.completedTopics}</p>
              <p className="text-xs text-gray-500">topics left</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress by Category */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress by Category</h2>
            <div className="space-y-6">
              {syllabusData.map((category) => {
                const categoryProgress = progress.categoryProgress.find(p => p.categoryId === category.id);
                const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.BookOpen;
                
                return (
                  <div key={category.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          <p className="text-sm text-gray-600">
                            {categoryProgress?.completed} of {categoryProgress?.total} topics
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">
                          {categoryProgress?.percentage || 0}%
                        </span>
                      </div>
                    </div>
                    <ProgressBar 
                      percentage={categoryProgress?.percentage || 0} 
                      showLabel={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Next Recommended Topics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-blue-600" />
              Up Next
            </h2>
            <div className="space-y-4">
              {nextTopics.length > 0 ? (
                nextTopics.map((topic) => (
                  <div key={topic.id} className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{topic.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{topic.categoryTitle}</p>
                    <StatusBadge status={topic.status} size="sm" />
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <Award className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">All topics completed!</p>
                  <p className="text-xs text-gray-500">Congratulations on your progress!</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Recent Completions
            </h2>
            <div className="space-y-3">
              {recentActivity.length > 0 ? (
                recentActivity.map((topic) => (
                  <div key={topic.id} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{topic.title}</p>
                      <p className="text-xs text-gray-600">{topic.categoryTitle}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No completed topics yet</p>
                  <p className="text-xs text-gray-400">Start learning to see your progress here!</p>
                </div>
              )}
            </div>
          </div>

          {/* Achievement Badge */}
          {progress.completionPercentage >= 25 && (
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Achievement Unlocked!</h3>
                <p className="text-sm opacity-90">
                  {progress.completionPercentage >= 75 
                    ? "DevOps Expert - 75%+ Complete"
                    : progress.completionPercentage >= 50
                    ? "DevOps Practitioner - 50%+ Complete"
                    : "DevOps Explorer - 25%+ Complete"
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}