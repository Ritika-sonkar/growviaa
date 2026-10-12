import { features } from '@/data/content';
import { Icon, SectionTitle } from '@/components/ui/Primitives';

export function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          center
          eyebrow="What We Offer"
          title="Everything You Need to Grow"
          subtitle="Three powerful pillars that guide you from a curious first-year student to a confident engineer ready for placements."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="glass-card glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Icon name={feature.icon} size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-lavender-300 text-sm leading-relaxed">{feature.description}</p>

              <div className="mt-6 pt-6 border-t border-purple-800/20 flex items-center justify-between">
                <span className="text-xs text-lavender-500 font-medium">
                  0{index + 1} / 03
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-900/30 border border-purple-700/30 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                  <Icon name="ArrowRight" size={14} className="text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
