import { skillItems } from '@/data/content';
import { SectionTitle, ProgressBar, Badge } from '@/components/ui/Primitives';
import { useState } from 'react';

const levelColors: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  Beginner: 'info',
  Intermediate: 'warning',
  Advanced: 'error',
};

export function SkillTracker() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(skillItems.map((s) => s.category)))];
  const filtered = filter === 'All' ? skillItems : skillItems.filter((s) => s.category === filter);

  const avgProgress = Math.round(
    skillItems.reduce((sum, s) => sum + s.progress, 0) / skillItems.length
  );

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 4 · Track Growth"
          title="Technical Skill Tracker"
          subtitle="See where you stand with each core skill. Progress bars show your current level — update them as you learn and grow."
        >
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-lavender-400">Average Skill Level:</span>
            <span className="text-lg font-bold gradient-text">{avgProgress}%</span>
          </div>
        </SectionTitle>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-cta text-white shadow-lg shadow-purple-500/20'
                  : 'bg-purple-900/20 text-lavender-300 border border-purple-700/30 hover:bg-purple-800/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((skill) => (
            <div key={skill.id} className="glass-card glass-card-hover p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-lavender-500 mb-1">{skill.category}</p>
                  <h3 className="text-sm font-bold text-white">{skill.name}</h3>
                </div>
                <Badge variant={levelColors[skill.level] || 'default'}>
                  {skill.level}
                </Badge>
              </div>
              <ProgressBar value={skill.progress} showValue />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
