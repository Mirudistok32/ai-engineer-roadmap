import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { EngineeringLoopView } from "@/presentation/components/ai-roadmap/EngineeringLoopView";
import { EngineeringPage } from "@/presentation/components/ai-roadmap/EngineeringPage";
import { FoundationPage } from "@/presentation/components/ai-roadmap/FoundationPage";
import { IntegrationPage } from "@/presentation/components/ai-roadmap/IntegrationPage";
import { RoadmapHomeView } from "@/presentation/components/ai-roadmap/RoadmapHomeView";
import { SystemLabsView } from "@/presentation/components/ai-roadmap/SystemLabsView";

function MapPage() {
  const navigate = useNavigate();
  return (
    <RoadmapHomeView
      onOpenPhase={(id) => navigate(`/phase/${id}`)}
      onOpenLoop={() => navigate("/loop")}
      onOpenLabs={() => navigate("/labs")}
    />
  );
}

function FoundationRoute() {
  const navigate = useNavigate();
  return (
    <FoundationPage
      onBack={() => navigate("/")}
      phaseIIReady
      onEnterPhaseII={() => navigate("/phase/integration")}
    />
  );
}

function IntegrationRoute() {
  const navigate = useNavigate();
  return (
    <IntegrationPage
      onBack={() => navigate("/")}
      phaseIIIReady
      onEnterPhaseIII={() => navigate("/phase/engineering")}
    />
  );
}

function EngineeringRoute() {
  const navigate = useNavigate();
  return <EngineeringPage onBack={() => navigate("/")} />;
}

function LoopRoute() {
  const navigate = useNavigate();
  return (
    <EngineeringLoopView
      onBack={() => navigate("/")}
      onOpenLabs={() => navigate("/labs")}
    />
  );
}

function LabsRoute() {
  const navigate = useNavigate();
  return (
    <SystemLabsView
      onBack={() => navigate("/")}
      onOpenLoop={() => navigate("/loop")}
      onOpenPhase={(id) => navigate(`/phase/${id}`)}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
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
