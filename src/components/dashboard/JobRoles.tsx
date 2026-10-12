import { jobRoles } from '@/data/content';
import { Icon, SectionTitle, Badge } from '@/components/ui/Primitives';
import { TrendingUp, IndianRupee } from 'lucide-react';

export function JobRoles() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Step 5 · Dream Big"
          title="Explore Software Engineering Roles"
          subtitle="Discover what different engineers actually do. Each role needs different skills — knowing your options helps you plan ahead."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobRoles.map((role) => (
            <div key={role.id} className="glass-card glass-card-hover p-6 group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg shadow-purple-500/15 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={role.icon} size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{role.title}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <TrendingUp size={12} className="text-green-400" />
                    <span className="text-xs text-green-300 font-medium">{role.growth}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-lavender-300 leading-relaxed mb-5">
                {role.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <IndianRupee size={14} className="text-purple-400" />
                  <span className="text-xs text-lavender-400 font-medium">Avg Salary:</span>
                  <span className="text-sm text-white font-semibold">{role.avgSalary}</span>
                </div>

                <div>
                  <p className="text-xs text-lavender-400 font-medium mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
