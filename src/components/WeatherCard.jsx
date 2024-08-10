import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.current || !weather.current.condition) {
    return <p className="text-center text-gray-500">No weather data available</p>;
  }

  const { name, country } = weather.location;
  const { condition, temp_c, humidity, wind_kph } = weather.current;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mb-6 mt-3">
      <div className="text-center text-2xl font-bold text-gray-900 mb-4">
        {name}, {country}
      </div>
      <div className="flex flex-col items-center mb-4">
        <img 
          src={condition.icon} 
          alt={condition.text} 
          className="w-24 h-24 mb-2"
        />
        <div className="text-xl font-semibold text-gray-800">
          {condition.text}
        </div>
      </div>
      <div className="text-center text-gray-600">
        <p className="text-lg">Temperature: {temp_c}°C</p>
        <p className="text-lg">Humidity: {humidity}%</p>
        <p className="text-lg">Wind Speed: {wind_kph} kph</p>
      </div>
    </div>
  );
};

export default WeatherCard;
