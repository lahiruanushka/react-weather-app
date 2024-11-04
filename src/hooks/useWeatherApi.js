import { useState, useCallback } from "react";
import { debounce } from "lodash";

export const useWeatherApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({
    current: null,
    forecast: null,
  });

  // Main function to fetch weather data
  const fetchWeatherData = useCallback(async (query) => {
    // Return early if no query is provided
    if (!query) return;

    // Set loading state and clear any previous errors
    setLoading(true);
    setError(null);

    try {
      // Fetch both current weather and forecast data simultaneously
      const [currentRes, forecastRes] = await Promise.all([
        fetch(
          `http://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${query}`
        ),
        fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${query}&days=7`
        ),
      ]);

      // Check if either request failed
      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("Failed to fetch weather data");
      }

      // Parse both responses simultaneously
      const [current, forecast] = await Promise.all([
        currentRes.json(),
        forecastRes.json(),
      ]);

      // Update state with new weather data
      setWeatherData({ current, forecast });
    } catch (error) {
      setError("Unable to fetch weather data. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a debounced version of the fetch function to prevents too many API calls when user is typing
  const debouncedFetch = useCallback(
    debounce((query) => fetchWeatherData(query), 500),
    [fetchWeatherData]
  );

  // Return values and functions needed by components
  return {
    loading,
    error,
    weatherData,
    fetchWeatherData,
    debouncedFetch,
  };
};
