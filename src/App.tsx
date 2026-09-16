import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import type { PhaseId } from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from '@/presentation/components/ai-roadmap/AppChrome';
import { EngineeringLoopView } from '@/presentation/components/ai-roadmap/EngineeringLoopView';
import { EngineeringPage } from '@/presentation/components/ai-roadmap/EngineeringPage';
import { FoundationPage } from '@/presentation/components/ai-roadmap/FoundationPage';
import { IntegrationPage } from '@/presentation/components/ai-roadmap/IntegrationPage';
import { RoadmapHomeView } from '@/presentation/components/ai-roadmap/RoadmapHomeView';
import { SystemLabsView } from '@/presentation/components/ai-roadmap/SystemLabsView';

function useAtlasNav(): AtlasNavHandlers {
  const navigate = useNavigate();
  return {
    onOpenMap: () => navigate('/'),
    onOpenPhase: (id: PhaseId) => navigate(`/phase/${id}`),
    onOpenLoop: () => navigate('/loop'),
    onOpenLabs: () => navigate('/labs'),
  };
}

function MapPage() {
  return <RoadmapHomeView {...useAtlasNav()} />;
}

function FoundationRoute() {
  const nav = useAtlasNav();
  return (
    <FoundationPage
      {...nav}
      phaseIIReady
      onEnterPhaseII={() => nav.onOpenPhase('integration')}
    />
  );
}

function IntegrationRoute() {
  const nav = useAtlasNav();
  return (
    <IntegrationPage
      {...nav}
      phaseIIIReady
      onEnterPhaseIII={() => nav.onOpenPhase('engineering')}
    />
  );
}

function EngineeringRoute() {
  return <EngineeringPage {...useAtlasNav()} />;
}

function LoopRoute() {
  return <EngineeringLoopView {...useAtlasNav()} />;
}

function LabsRoute() {
  return <SystemLabsView {...useAtlasNav()} />;
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/phase/foundation" element={<FoundationRoute />} />
        <Route path="/phase/integration" element={<IntegrationRoute />} />
        <Route path="/phase/engineering" element={<EngineeringRoute />} />
        <Route path="/loop" element={<LoopRoute />} />
        <Route path="/labs" element={<LabsRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
