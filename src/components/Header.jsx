import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-emerald-700">GMC Directory</Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          <Link to="/dashboard">Owner Dashboard</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
}
