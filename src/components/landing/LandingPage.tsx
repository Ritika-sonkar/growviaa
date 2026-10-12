import { CTASection } from './CTASection';
import { Hero } from './Hero';
import { Features } from './Features';
import { Journey } from './Journey';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="animate-fade-in">
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <Journey onGetStarted={onGetStarted} />
      <CTASection onGetStarted={onGetStarted} />
    </div>
  );
}
