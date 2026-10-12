import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LandingPage } from '@/components/landing/LandingPage';
import { Dashboard } from '@/components/dashboard/Dashboard';

type Page = 'landing' | 'dashboard';

function App() {
  const [page, setPage] = useState<Page>('landing');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-midnight-950">
      <Navbar onNavigate={handleNavigate} currentPage={page} />

      <main>
        {page === 'landing' ? (
          <LandingPage onGetStarted={() => handleNavigate('dashboard')} />
        ) : (
          <Dashboard />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
