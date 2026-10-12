import { WelcomeSection } from './WelcomeSection';
import { CareerInterests } from './CareerInterests';
import { ProgrammingLanguages } from './ProgrammingLanguages';
import { LearningRoadmap } from './LearningRoadmap';
import { SkillTracker } from './SkillTracker';
import { JobRoles } from './JobRoles';
import { DreamCompanies } from './DreamCompanies';
import { ProjectIdeas } from './ProjectIdeas';
import { ProgressOverview } from './ProgressOverview';
import { NextSteps } from './NextSteps';

export function Dashboard() {
  const handleNavigate = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in min-h-screen bg-gradient-purple">
      <WelcomeSection onExplore={() => handleNavigate('career-interests')} />
      <CareerInterests />
      <ProgrammingLanguages />
      <LearningRoadmap />
      <SkillTracker />
      <JobRoles />
      <DreamCompanies />
      <ProjectIdeas />
      <ProgressOverview />
      <NextSteps onNavigate={handleNavigate} />
    </div>
  );
}
