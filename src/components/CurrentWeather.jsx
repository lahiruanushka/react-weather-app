import React from 'react';
import { Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherMetric = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="text-blue-500" />
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const CurrentWeather = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          {location.name}, {location.country}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={current.condition.icon}
              alt={current.condition.text}
              className="w-24 h-24"
            />
            <div>
              <p className="text-4xl font-bold">{current.temp_c}°C</p>
              <p className="text-gray-600">{current.condition.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <WeatherMetric
              icon={Thermometer}
              label="Feels like"
              value={`${current.feelslike_c}°C`}
            />
            <WeatherMetric
              icon={Droplets}
              label="Humidity"
              value={`${current.humidity}%`}
            />
            <WeatherMetric
              icon={Wind}
              label="Wind"
              value={`${current.wind_kph} km/h`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
