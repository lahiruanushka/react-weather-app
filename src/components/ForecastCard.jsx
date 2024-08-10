import React from "react";

const ForecastCard = ({ forecast }) => {
  const { forecastday } = forecast.forecast;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mx-5 my-4 overflow-x-auto">
      <div className="text-center text-xl font-bold text-gray-800 mb-3">
        7-Day Forecast
      </div>
      <div className="flex space-x-3">
        {forecastday.map((day, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center shadow-md min-w-[150px] flex-shrink-0">
            <div className="text-md font-semibold text-gray-700 mb-1">{day.date}</div>
            <img 
              src={day.day.condition.icon} 
              alt={day.day.condition.text} 
              className="w-12 h-12 mx-auto mb-2"
            />
            <div className="text-gray-600">
              <p className="text-sm">Condition: {day.day.condition.text}</p>
              <p className="text-sm">Max Temp: {day.day.maxtemp_c}°C</p>
              <p className="text-sm">Min Temp: {day.day.mintemp_c}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
