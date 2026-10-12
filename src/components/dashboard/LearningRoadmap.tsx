import { useState } from 'react';
import { roadmapSteps } from '@/data/content';
import { SectionTitle, Badge } from '@/components/ui/Primitives';
import { ChevronDown, Check, Clock, Circle, ArrowRight } from 'lucide-react';

export function LearningRoadmap() {
  const [openStep, setOpenStep] = useState<number | null>(1);
  const [completed, setCompleted] = useState<Set<number>>(
    new Set(roadmapSteps.filter((s) => s.completed).map((s) => s.id))
  );

  const toggleComplete = (id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const completedCount = completed.size;
  const totalCount = roadmapSteps.length;

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="Step 3 · Follow the Path"
          title="Beginner-Friendly Learning Roadmap"
          subtitle="A structured path designed for first-year students. Mark each step as you complete it to track your progress."
        >
          <div className="mt-4 flex items-center gap-4">
            <div className="flex-1 max-w-xs">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-lavender-400">Overall Progress</span>
                <span className="text-xs text-purple-300 font-semibold">
                  {completedCount}/{totalCount}
                </span>
              </div>
              <div className="h-2 bg-midnight-700/60 rounded-full overflow-hidden border border-purple-900/30">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-accent-light transition-all duration-700"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </SectionTitle>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-purple-700/20 to-transparent" />

          <div className="space-y-4">
            {roadmapSteps.map((step) => {
              const isOpen = openStep === step.id;
              const isDone = completed.has(step.id);
              return (
                <div key={step.id} className="relative pl-16">
                  <button
                    onClick={() => toggleComplete(step.id)}
                    className={`absolute left-0 top-5 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      isDone
                        ? 'bg-gradient-cta shadow-lg shadow-purple-500/30 scale-100'
                        : 'bg-midnight-800 border-2 border-purple-700/40 hover:border-purple-500/60'
                    }`}
                    title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isDone ? (
                      <Check size={20} className="text-white" />
                    ) : (
                      <Circle size={18} className="text-purple-500" />
                    )}
                  </button>

                  <div
                    className={`glass-card transition-all duration-300 ${
                      isOpen ? 'border-purple-500/40' : 'glass-card-hover'
                    } ${isDone ? 'opacity-70' : ''}`}
                  >
                    <button
                      onClick={() => setOpenStep(isOpen ? null : step.id)}
                      className="w-full p-5 flex items-center justify-between text-left"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-purple-400">
                            Step {step.id}
                          </span>
                          {isDone && (
                            <Badge variant="success">
                              <Check size={11} />
                              Done
                            </Badge>
                          )}
                        </div>
                        <h3 className={`text-base font-bold ${isDone ? 'text-lavender-300' : 'text-white'}`}>
                          {step.title}
                        </h3>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 animate-fade-in-up">
                        <div className="pt-4 border-t border-purple-800/20">
                          <p className="text-sm text-lavender-300 leading-relaxed mb-4">
                            {step.description}
                          </p>

                          <div className="flex items-center gap-2 mb-4">
                            <Clock size={14} className="text-purple-400" />
                            <span className="text-xs text-lavender-400 font-medium">
                              {step.duration}
                            </span>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-2">
                            {step.topics.map((topic) => (
                              <div
                                key={topic}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-midnight-800/50 border border-purple-800/20"
                              >
                                <ArrowRight size={14} className="text-purple-500 flex-shrink-0" />
                                <span className="text-sm text-lavender-200">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
