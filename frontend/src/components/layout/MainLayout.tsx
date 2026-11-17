import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Users, CheckSquare, Camera, Calendar, FileText, BarChart3 } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/teams', label: 'Teams & Members', icon: Users },
  { to: '/tasks', label: 'Tasks & Progress', icon: CheckSquare },
  { to: '/attendance', label: 'Attendance', icon: Camera },
  { to: '/meetings', label: 'Meetings', icon: Calendar },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
];

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-5 border-b border-slate-800">
          <h1 className="text-lg font-bold tracking-tight">Club Activity Tracker</h1>
          <p className="text-xs text-slate-400 mt-1">Team Algebra</p>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">Internal Club Management Portal</span>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2.5 py-1 rounded-full">
              Frontend Lead
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}