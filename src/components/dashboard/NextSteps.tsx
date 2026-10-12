import { SectionTitle } from '@/components/ui/Primitives';
import { ArrowRight, Check, BookOpen, Code2, Github, Users } from 'lucide-react';

interface NextStepsProps {
  onNavigate: (target: string) => void;
}

const steps = [
  {
    id: 'interests',
    icon: Users,
    title: 'Complete Your Interest Profile',
    description: 'Select at least 3 career interests to help us understand what drives you.',
    action: 'Go to Career Interests',
    target: 'career-interests',
    done: false,
  },
  {
    id: 'language',
    icon: Code2,
    title: 'Pick Your First Programming Language',
    description: 'Choose one language to focus on. Python or JavaScript are great for beginners.',
    action: 'Explore Languages',
    target: 'career-interests',
    done: false,
  },
  {
    id: 'project',
    icon: BookOpen,
    title: 'Build Your First Mini Project',
    description: 'Apply what you have learned. Start with the simple Calculator or To-Do List app.',
    action: 'Browse Projects',
    target: 'career-interests',
    done: false,
  },
  {
    id: 'github',
    icon: Github,
    title: 'Create a GitHub Account',
    description: 'Every engineer needs one. Create a free account and upload your first project.',
    action: 'Learn More',
    target: 'career-interests',
    done: false,
  },
];

export function NextSteps({ onNavigate }: NextStepsProps) {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="Step 9 · Keep Moving"
          title="What Should You Do Next?"
          subtitle="A clear action plan to keep your momentum going. Complete these steps to make the most of your first year."
        />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="glass-card glass-card-hover p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-700/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-400">{index + 1}</span>
                </div>

                <div className="w-11 h-11 rounded-xl bg-gradient-cta flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/15">
                  <step.icon size={20} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-lavender-300">{step.description}</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate(step.target)}
                className="btn-secondary text-sm py-2.5 px-5 group flex-shrink-0"
              >
                {step.action}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-accent/5 pointer-events-none" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-cta mx-auto flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <Check size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You Are on the Right Track</h3>
            <p className="text-lavender-300 text-sm max-w-lg mx-auto">
              First year is all about exploration. Try different things, build small projects,
              and do not be afraid to make mistakes. Every expert was once a beginner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
