// src/components/DataDisplay.tsx

'use client'

import React from 'react';
import { useStore } from '../store/useStore';
import Card from './card';
import Container from './container';

const DataDisplay: React.FC = () => {
  const weatherData = useStore((state) => state.weatherData);
  const heatIndexData = useStore((state) => state.heatIndexData);
  const floodMapData = useStore((state) => state.floodMapData);

  
  return (
    <Container>
    <div className="p-6  min-h-screen">
      {weatherData || heatIndexData || floodMapData && (<h2 className="text-2xl font-bold text-center mb-6">Results</h2>) }
      <div className="grid grid-cols-1 gap-4">
        {weatherData && (
          <Card
            title="Weather Data"
            content={`Temperature: ${weatherData.temperature}°C\nDescription: ${weatherData.description}`}
          />
        )}
        {heatIndexData && (
          <Card
            title="Heat Index Data"
            content={`Heat Index: ${heatIndexData.heatIndex}`}
          />
        )}
        {floodMapData && (
          <Card
            title="Flood Map Data"
            content={`Flood Risk: ${floodMapData.riskLevel}`}
          />
        )}
      </div>
    </div>
    </Container>
  );
};

export default DataDisplay;
