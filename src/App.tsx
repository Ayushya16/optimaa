import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrialSection } from './components/IndustrialSection';
import { CorporateSection } from './components/CorporateSection';
import { MobileSection } from './components/MobileSection';
import { AccessibilitySection } from './components/AccessibilitySection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { DeckViewerModal } from './components/DeckViewerModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#A1FF5F] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar onOpenDeck={() => setIsDeckOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenDeck={() => setIsDeckOpen(true)} />
        <IndustrialSection />
        <CorporateSection />
        <MobileSection />
        <AccessibilitySection />
        <PrinciplesSection />
        <RoadmapSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeck={() => setIsDeckOpen(true)} />

      {/* Fullscreen Interactive Deck Modal */}
      <DeckViewerModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
};

export default App;
