import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Letters from './pages/Letters';
import Healing from './pages/Healing';
import Someday from './pages/Someday';
import MusicPlayer from './components/MusicPlayer';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50 font-serif">
        <nav className="p-4 bg-white shadow-md flex flex-col md:flex-row justify-between items-center md:px-8">
          <h1 className="text-2xl font-bold text-rose-600 mb-2 md:mb-0">For Rosy </h1>
          <div className="space-x-4 text-gray-600">
            <Link to="/" className="hover:text-rose-600 transition">Home</Link>
            <Link to="/our-story" className="hover:text-rose-600 transition">Our Story</Link>
            <Link to="/letters" className="hover:text-rose-600 transition">Letters</Link>
            <Link to="/healing" className="hover:text-rose-600 transition">Healing</Link>
            <Link to="/someday" className="hover:text-rose-600 transition">Someday</Link>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/healing" element={<Healing />} />
          <Route path="/someday" element={<Someday />} />

        </Routes>
      </div>

      {/* <div className="min-h-screen bg-pink-50 font-serif">
        <nav>...</nav>
        <Routes>...</Routes>
        <MusicPlayer />
      </div> */}

    </Router>
  );
}

export default App;
