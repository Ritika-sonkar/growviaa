import { useState } from 'react';
import { programmingLanguages } from '@/data/content';
import { Icon, SectionTitle, Badge, ProgressBar } from '@/components/ui/Primitives';
import { ChevronDown, Star } from 'lucide-react';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error',
};

export function ProgrammingLanguages() {
  const [expanded, setExpanded] = useState<string | null>('python');

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 2 · Start Coding"
          title="Explore Programming Languages"
          subtitle="Each language opens different doors. Click any language to learn more about what it is used for and why you might choose it."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {programmingLanguages.map((lang) => {
            const isOpen = expanded === lang.id;
            return (
              <div
                key={lang.id}
                className={`glass-card transition-all duration-300 ${
                  isOpen ? 'border-purple-500/40 shadow-xl shadow-purple-900/15' : 'glass-card-hover'
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : lang.id)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg shadow-purple-500/15 flex-shrink-0">
                    <Icon name={lang.icon} size={22} className="text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                      <Badge variant={difficultyColors[lang.difficulty]}>
                        {lang.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-lavender-300 truncate">
                      {lang.description}
                    </p>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="pt-4 border-t border-purple-800/20 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-lavender-400 font-medium flex items-center gap-1.5">
                            <Star size={13} className="text-purple-400" />
                            Popularity
                          </span>
                          <span className="text-xs text-purple-300 font-semibold">
                            {lang.popularity}%
                          </span>
                        </div>
                        <ProgressBar value={lang.popularity} />
                      </div>

                      <div>
                        <p className="text-xs text-lavender-400 font-medium mb-2">Used For</p>
                        <div className="flex flex-wrap gap-2">
                          {lang.useCases.map((use) => (
                            <Badge key={use} variant="info">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
