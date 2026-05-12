const blocks = [
  'Business Owner Dashboard', 'Booking & Appointments', 'Government Service Enhancements', 'Real Estate Features', 'Jobs Directory Features', 'Doctors & Health Features', 'Emergency Services', 'Events Directory', 'Multi-language Support', 'AI Search & Suggestions', 'Chatbot Assistant', 'Smart Map View', 'QR Codes', 'Push Notifications', 'Verified Badges', 'Subscription Plans', 'Community Features', 'Admin Dashboard', 'GMC Wellness & Sustainability',
];

export default function FeatureRoadmap() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-2xl font-bold">Advanced + Future Feature Modules</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-3">{blocks.map((block) => <div className="rounded-xl border bg-white p-4" key={block}>{block}</div>)}</div>
    </div>
  );
}
