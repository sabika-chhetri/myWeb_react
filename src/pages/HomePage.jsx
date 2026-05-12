import { Link } from 'react-router-dom';
import { categories, sampleListings } from '../data';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800">Find services across GMC Mindfulness City</h1>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <input className="rounded-lg border p-3" placeholder="Search by keyword" />
          <select className="rounded-lg border p-3"><option>Filter by category</option>{categories.map((c) => <option key={c}>{c}</option>)}</select>
          <input className="rounded-lg border p-3" placeholder="Filter by location" />
          <select className="rounded-lg border p-3"><option>Filter by rating</option><option>4+ stars</option><option>3+ stars</option></select>
          <label className="flex items-center gap-2 rounded-lg border p-3"><input type="checkbox" /> Open Now</label>
          <select className="rounded-lg border p-3"><option>Price range</option><option>$</option><option>$$</option><option>$$$</option></select>
        </div>
      </section>
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Core Categories</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">{categories.map((c) => <div key={c} className="rounded-lg border p-3 text-sm">{c}</div>)}</div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {sampleListings.map((item) => (
          <article key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-slate-500">{item.category} • {item.location}</p>
            <p className="mt-2 text-sm">⭐ {item.rating} • {item.openNow ? 'Open Now' : 'Closed'}</p>
            <div className="mt-3 flex flex-wrap gap-2">{item.services.map((service) => <span key={service} className="rounded-full bg-emerald-100 px-3 py-1 text-xs">{service}</span>)}</div>
            <Link className="mt-4 inline-block text-sm font-medium text-emerald-700" to={`/listing/${item.id}`}>View profile →</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
