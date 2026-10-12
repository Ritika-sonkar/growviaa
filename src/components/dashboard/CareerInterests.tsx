import { useState } from 'react';
import { careerInterests } from '@/data/content';
import { Icon, SectionTitle, Badge } from '@/components/ui/Primitives';
import { Check, Heart } from 'lucide-react';

export function CareerInterests() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="career-interests" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 1 · Discover Yourself"
          title="Explore Your Career Interests"
          subtitle="What excites you? Select the fields that spark your curiosity. You can always change these later — this is about exploration, not commitment."
        >
          {selected.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-300">
              <Heart size={16} className="fill-purple-400 text-purple-400" />
              {selected.length} interest{selected.length > 1 ? 's' : ''} selected
            </div>
          )}
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careerInterests.map((interest) => {
            const isSelected = selected.includes(interest.id);
            return (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`glass-card p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-purple-500/60 ring-1 ring-purple-500/30 shadow-xl shadow-purple-900/20'
                    : 'glass-card-hover'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-cta shadow-lg shadow-purple-500/20'
                        : 'bg-purple-900/30 border border-purple-700/30'
                    }`}
                  >
                    <Icon
                      name={interest.icon}
                      size={22}
                      className={isSelected ? 'text-white' : 'text-purple-400'}
                    />
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-purple-500 border-purple-500'
                        : 'border-purple-700/40'
                    }`}
                  >
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{interest.title}</h3>
                <p className="text-sm text-lavender-300 leading-relaxed mb-4">
                  {interest.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {interest.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
