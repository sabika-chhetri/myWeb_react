import { useParams } from 'react-router-dom';
import { sampleListings } from '../data';

export default function ListingPage() {
  const { id } = useParams();
  const listing = sampleListings.find((l) => String(l.id) === id) ?? sampleListings[0];

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">{listing.name}</h1>
        <p className="mt-2 text-slate-600">Details, photos, contact, location, opening hours, reviews, and services offered.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-semibold">Contact Options</h2><p className="mt-2 text-sm">Call • WhatsApp • Email • Visit Website • Book Appointment</p></section>
        <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-semibold">Map Integration</h2><p className="mt-2 text-sm">Map view, Near Me, and Directions button.</p></section>
        <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-semibold">Reviews & Ratings</h2><p className="mt-2 text-sm">Star ratings, text reviews, photo uploads.</p></section>
        <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-semibold">Real-time Status</h2><p className="mt-2 text-sm">Open now, queue time, vacancy/property availability.</p></section>
      </div>
    </div>
  );
}
