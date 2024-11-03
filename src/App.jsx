import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';
import { useWeatherApi } from './hooks/useWeatherApi';

const App = () => {
  const [searchText, setSearchText] = useState('');
  
  // Use custom hook to get weather data and functions
  const { 
    loading, 
    error, 
    weatherData, 
    debouncedFetch 
  } = useWeatherApi();

  // Fetch initial weather data for Colombo when component mounts
  useEffect(() => {
    debouncedFetch('colombo');
  }, [debouncedFetch]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    // Only fetch if user has typed at least 3 characters
    if (query.length >= 3) {
      debouncedFetch(query);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search input */}
        <SearchBar 
          searchText={searchText} 
          onSearchChange={handleSearchChange} 
        />
        
        {/* Error and loading states */}
        {error && <ErrorAlert message={error} />}
        {loading && <LoadingSpinner />}
        
        {/* Weather data display */}
        {weatherData.current && (
          <CurrentWeather weatherData={weatherData.current} />
        )}
        
        {weatherData.forecast && (
          <ForecastCard forecast={weatherData.forecast} />
        )}
      </div>
    </div>
  );
};

export default App;