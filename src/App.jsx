import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

function App() {
  const [searchText, setSearchText] = useState(""); // State to store the search input
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [currentWeatherData, setCurrentWeatherData] = useState(null); // State to store current weather data
  const [forecastWeatherData, setForecastWeatherData] = useState(null); // State to store forecast data

  // Handles search input and triggers both weather data fetches
  const handleSearch = (query) => {
    fetchWeatherData(query);
    fetchForecastWeatherData(query);
  };

  // Fetches current weather data from the API
  const fetchWeatherData = async (query) => {
    setLoading(true); 
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCurrentWeatherData(data);
    } catch (error) {
      console.error('Error fetching current weather data:', error);
    } finally {
      setLoading(false); 
    }
  };

  // Fetches weekly forecast data from the API
  const fetchForecastWeatherData = async (query) => {
    setLoading(true); 
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${query}&days=7`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setForecastWeatherData(data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchWeatherData('colombo');
    fetchForecastWeatherData('colombo');
  }, []);

  return (
    <div className="App">
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      
      {loading && <div className="spinner"></div>}
      {currentWeatherData && (
        <WeatherCard weather={currentWeatherData} />
      )}
      {forecastWeatherData && (
        <ForecastCard forecast={forecastWeatherData} />
      )}

    </div>
  );
}

export default App;
