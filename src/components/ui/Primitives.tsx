import { type ReactNode } from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  const iconName = name as keyof typeof Icons;
  const LucideIcon = Icons[iconName] as Icons.LucideIcon | undefined;

  if (!LucideIcon) {
    return <Icons.Sparkles className={className} size={size} />;
  }

  return <LucideIcon className={className} size={size} />;
}

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

export function SectionTitle({ eyebrow, title, subtitle, center, children }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      {eyebrow && (
        <span className="badge-active mb-4 inline-flex">
          <Icon name="Sparkles" size={14} />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lavender-300 text-base md:text-lg leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export function ProgressBar({ value, max = 100, label, showValue }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-lavender-300 font-medium">{label}</span>}
          {showValue && (
            <span className="text-sm text-purple-300 font-semibold">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="h-2 w-full bg-midnight-700/60 rounded-full overflow-hidden border border-purple-900/30">
        <div
          className="progress-bar-fill bg-gradient-to-r from-purple-500 to-accent-light"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'active' | 'coming' | 'success' | 'warning' | 'error' | 'info';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-purple-900/30 text-lavender-300 border border-purple-700/30',
    active: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    coming: 'bg-midnight-700/50 text-lavender-400 border border-purple-700/30',
    success: 'bg-green-500/15 text-green-300 border border-green-500/25',
    warning: 'bg-amber-500/15 text-amber-300 border border-amber-500/25',
    error: 'bg-red-500/15 text-red-300 border border-red-500/25',
    info: 'bg-blue-500/15 text-blue-300 border border-blue-500/25',
  };

  return <span className={`badge ${variants[variant]}`}>{children}</span>;
}
