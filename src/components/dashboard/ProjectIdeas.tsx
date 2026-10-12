import { projectIdeas } from '@/data/content';
import { Icon, SectionTitle, Badge } from '@/components/ui/Primitives';
import { Clock, ArrowRight } from 'lucide-react';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
};

export function ProjectIdeas() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 7 · Build Something"
          title="Beginner Project Suggestions"
          subtitle="The best way to learn is by building. Pick a project that excites you and start coding. These are perfect for first-year students."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectIdeas.map((project) => (
            <div key={project.id} className="glass-card glass-card-hover p-6 group flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg shadow-purple-500/15 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={project.icon} size={22} className="text-white" />
                </div>
                <Badge variant={difficultyColors[project.difficulty] || 'default'}>
                  {project.difficulty}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-lavender-300 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-purple-400" />
                  <span className="text-xs text-lavender-400 font-medium">
                    {project.estimatedTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <button className="w-full mt-3 py-2.5 rounded-xl bg-purple-900/20 border border-purple-700/30 text-sm font-medium text-lavender-200 hover:bg-purple-800/30 hover:text-white hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 group/btn">
                  Start Building
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
