import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, Plus, Save, X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Category, Topic } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { ProgressBar } from '../components/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { syllabusData as initialSyllabusData } from '../data/syllabusData';

export function SyllabusPage() {
  const [syllabusData, setSyllabusData] = useLocalStorage<Category[]>('syllabus-data', initialSyllabusData);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [editingTopic, setEditingTopic] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const updateTopicStatus = (categoryId: string, topicId: string, status: Topic['status']) => {
    setSyllabusData(prev => 
      prev.map(category => 
        category.id === categoryId
          ? {
              ...category,
              topics: category.topics.map(topic =>
                topic.id === topicId ? { ...topic, status } : topic
              )
            }
          : category
      )
    );
  };

  const startEditingNotes = (topicId: string, currentNotes: string) => {
    setEditingTopic(topicId);
    setTempNotes(currentNotes);
  };

  const saveNotes = (categoryId: string, topicId: string) => {
    setSyllabusData(prev => 
      prev.map(category => 
        category.id === categoryId
          ? {
              ...category,
              topics: category.topics.map(topic =>
                topic.id === topicId ? { ...topic, notes: tempNotes } : topic
              )
            }
          : category
      )
    );
    setEditingTopic(null);
    setTempNotes('');
  };

  const cancelEditingNotes = () => {
    setEditingTopic(null);
    setTempNotes('');
  };

  const getCategoryProgress = (topics: Topic[]) => {
    const completed = topics.filter(topic => topic.status === 'completed').length;
    const total = topics.length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Azure DevOps Syllabus
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Track your progress through each topic, add personal notes, and access curated resources 
          for comprehensive Azure DevOps learning.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {syllabusData.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          const progress = getCategoryProgress(category.topics);
          const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.BookOpen;

          return (
            <div key={category.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{progress}%</div>
                      <div className="text-sm text-gray-500">{category.topics.length} topics</div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <ProgressBar percentage={progress} showLabel={false} />
                </div>
              </button>

              {/* Topics */}
              {isExpanded && (
                <div className="border-t border-gray-100 bg-gray-50/30">
                  <div className="p-6 space-y-4">
                    {category.topics.map((topic) => (
                      <div key={topic.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        {/* Topic Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                            <div className="flex flex-wrap items-center gap-3">
                              <StatusBadge status={topic.status} />
                              {topic.difficulty && <DifficultyBadge difficulty={topic.difficulty} />}
                            </div>
                          </div>
                          <div className="mt-4 lg:mt-0">
                            <div className="flex flex-wrap gap-2">
                              <button
                                onClick={() => updateTopicStatus(category.id, topic.id, 'not-started')}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                  topic.status === 'not-started'
                                    ? 'bg-gray-200 text-gray-800'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                Not Started
                              </button>
                              <button
                                onClick={() => updateTopicStatus(category.id, topic.id, 'in-progress')}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                  topic.status === 'in-progress'
                                    ? 'bg-yellow-200 text-yellow-800'
                                    : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                                }`}
                              >
                                In Progress
                              </button>
                              <button
                                onClick={() => updateTopicStatus(category.id, topic.id, 'completed')}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                  topic.status === 'completed'
                                    ? 'bg-green-200 text-green-800'
                                    : 'bg-green-100 text-green-600 hover:bg-green-200'
                                }`}
                              >
                                Completed
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Resources */}
                        {topic.resources.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Resources:</h4>
                            <div className="flex flex-wrap gap-2">
                              {topic.resources.map((resource, index) => (
                                <a
                                  key={index}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                                >
                                  <span>{resource.title}</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Notes Section */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-700">Personal Notes:</h4>
                            {editingTopic !== topic.id && (
                              <button
                                onClick={() => startEditingNotes(topic.id, topic.notes)}
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                              >
                                <Plus className="h-4 w-4 inline mr-1" />
                                {topic.notes ? 'Edit' : 'Add Note'}
                              </button>
                            )}
                          </div>

                          {editingTopic === topic.id ? (
                            <div className="space-y-3">
                              <textarea
                                value={tempNotes}
                                onChange={(e) => setTempNotes(e.target.value)}
                                placeholder="Add your personal notes about this topic..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={3}
                              />
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => saveNotes(category.id, topic.id)}
                                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                >
                                  <Save className="h-4 w-4 mr-1" />
                                  Save
                                </button>
                                <button
                                  onClick={cancelEditingNotes}
                                  className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                                >
                                  <X className="h-4 w-4 mr-1" />
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-gray-50 rounded-lg p-3 min-h-[60px]">
                              {topic.notes ? (
                                <p className="text-gray-700 text-sm">{topic.notes}</p>
                              ) : (
                                <p className="text-gray-400 text-sm italic">No notes added yet</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}