import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const Placeholder = ({ title, owner }: { title: string; owner: string }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    <p className="text-sm text-slate-500 mt-1">Assigned Module — {owner}</p>
  </div>
);

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Placeholder title="Club Dashboard Overview" owner="Frontend Lead" />} />
          <Route path="/projects" element={<Placeholder title="Project Management" owner="Member 1" />} />
          <Route path="/teams" element={<Placeholder title="Teams & Member Directory" owner="Member 2" />} />
          <Route path="/tasks" element={<Placeholder title="Tasks & Progress Tracking" owner="Member 3" />} />
          <Route path="/attendance" element={<Placeholder title="Camera & Manual Attendance" owner="Member 3" />} />
          <Route path="/meetings" element={<Placeholder title="Meetings & Action Items" owner="Member 3" />} />
          <Route path="/documents" element={<Placeholder title="Document Repository" owner="Member 1" />} />
          <Route path="/analytics" element={<Placeholder title="Project Analytics & Reports" owner="Frontend Lead" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}