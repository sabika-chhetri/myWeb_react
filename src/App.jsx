import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import FeatureRoadmap from './pages/FeatureRoadmap';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/dashboard" element={<FeatureRoadmap />} />
        <Route path="/admin" element={<FeatureRoadmap />} />
        <Route path="/account" element={<FeatureRoadmap />} />
      </Routes>
    </BrowserRouter>
  );
}
