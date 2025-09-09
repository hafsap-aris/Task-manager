import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch random Quran verse
  const fetchRandomVerse = async () => {
    try {
      setLoading(true);
      setError(null);
      
      
      const randomSurah = Math.floor(Math.random() * 114) + 1;
      const randomAyah = Math.floor(Math.random() * 50) + 1; // Most surahs have fewer than 50 ayahs
      
      const response = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/en.sahih`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch verse');
      }
      
      const data = await response.json();
      
      if (data.code === 200 && data.data) {
        setVerse({
          text: data.data.text,
          surah: data.data.surah.englishName,
          ayah: data.data.numberInSurah,
          surahNumber: data.data.surah.number
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching verse:', err);
      setError('Unable to load verse. Please try again.');
      // Fallback verse
      setVerse({
        text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
        surah: "At-Talaq",
        ayah: 3,
        surahNumber: 65
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch verse on component mount
  useEffect(() => {
    fetchRandomVerse();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
        Welcome to Task Manager
      </h1>
      
      {/* Islamic Quote Section */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-emerald-700/40 backdrop-blur-sm border border-emerald-600/30 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-lg">☪</span>
            </div>
            <h2 className="text-2xl font-bold text-emerald-100">Daily Inspiration</h2>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-300"></div>
              <span className="ml-3 text-emerald-200">Loading verse...</span>
            </div>
          ) : error ? (
            <div className="text-red-300 mb-4">
              <p>{error}</p>
              <button 
                onClick={fetchRandomVerse}
                className="mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : verse ? (
            <div className="space-y-4">
              <blockquote className="text-lg md:text-xl text-emerald-50 leading-relaxed italic">
                "{verse.text}"
              </blockquote>
              <div className="flex items-center justify-between text-emerald-200">
                <cite className="text-sm font-medium">
                  — Quran {verse.surah} {verse.surahNumber}:{verse.ayah}
                </cite>
                <button 
                  onClick={fetchRandomVerse}
                  className="px-4 py-2 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  New Verse
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Main Action Button */}
      <Link 
        to="/tasks" 
        className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold transform hover:scale-105"
      >
        Go to Tasks
      </Link>
      
    </div>
  );
}

export default Home;