import { SectionTitle, ProgressBar } from '@/components/ui/Primitives';
import { BookOpen, Code2, Brain, Wrench, Trophy, Target } from 'lucide-react';

const progressCards = [
  {
    id: 'roadmap',
    icon: Target,
    title: 'Learning Roadmap',
    subtitle: 'First Year Path',
    progress: 33,
    detail: '2 of 6 steps completed',
    color: 'from-purple-500 to-accent-light',
  },
  {
    id: 'programming',
    icon: Code2,
    title: 'Programming Skills',
    subtitle: 'Languages & Logic',
    progress: 65,
    detail: 'Python & C in progress',
    color: 'from-blue-500 to-purple-400',
  },
  {
    id: 'web',
    icon: BookOpen,
    title: 'Web Development',
    subtitle: 'HTML, CSS & JS',
    progress: 45,
    detail: 'HTML done, CSS in progress',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    id: 'cs',
    icon: Brain,
    title: 'CS Foundations',
    subtitle: 'DS & OOP',
    progress: 42,
    detail: 'Basics underway',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools & Workflow',
    subtitle: 'Git & GitHub',
    progress: 50,
    detail: 'Basic Git commands',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 'overall',
    icon: Trophy,
    title: 'Overall Progress',
    subtitle: 'First Year',
    progress: 37,
    detail: 'On track — keep going!',
    color: 'from-purple-500 to-pink-400',
  },
];

export function ProgressOverview() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 8 · See Your Growth"
          title="Your Progress at a Glance"
          subtitle="A snapshot of where you are across all areas of your first-year journey. Keep building — every step counts."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {progressCards.map((card) => (
            <div key={card.id} className="glass-card glass-card-hover p-6">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}
                >
                  <card.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-lavender-500">{card.subtitle}</p>
                </div>
              </div>

              <ProgressBar value={card.progress} showValue />

              <p className="mt-3 text-xs text-lavender-400">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
