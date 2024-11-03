import React from 'react';

const DayForecast = ({ day, index }) => (
  <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm">
    <p className="text-sm font-medium">
      {index === 0 
        ? 'Today' 
        : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
    </p>
    <img
      src={day.day.condition.icon}
      alt={day.day.condition.text}
      className="w-12 h-12 my-2"
    />
    <div className="text-center">
      <p className="font-semibold">{Math.round(day.day.maxtemp_c)}°</p>
      <p className="text-gray-500 text-sm">{Math.round(day.day.mintemp_c)}°</p>
    </div>
  </div>
);

const ForecastCard = ({ forecast }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">7-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forecast.forecast.forecastday.map((day, index) => (
            <DayForecast key={day.date} day={day} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
