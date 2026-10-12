import { dreamCompanies } from '@/data/content';
import { Icon, SectionTitle, Badge } from '@/components/ui/Primitives';
import { Building2 } from 'lucide-react';

const difficultyColors: Record<string, 'success' | 'warning' | 'error'> = {
  Achievable: 'success',
  Challenging: 'warning',
  Dream: 'error',
};

export function DreamCompanies() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 6 · Aim High"
          title="Discover Dream Companies"
          subtitle="Get to know the top tech companies that hire computer science graduates. Start early — know what they look for and build toward it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dreamCompanies.map((company) => (
            <div key={company.id} className="glass-card glass-card-hover p-6 group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700/40 to-midnight-800 border border-purple-700/30 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                  <Icon name={company.icon} size={26} className="text-purple-300" />
                </div>
                <Badge variant={difficultyColors[company.difficulty] || 'default'}>
                  {company.difficulty}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{company.name}</h3>
              <p className="text-sm text-lavender-300 leading-relaxed mb-5">
                {company.description}
              </p>

              <div className="pt-4 border-t border-purple-800/20">
                <p className="text-xs text-lavender-400 font-medium mb-2">Hires For</p>
                <div className="flex flex-wrap gap-1.5">
                  {company.roles.map((role) => (
                    <Badge key={role} variant="info">
                      <Building2 size={10} />
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
