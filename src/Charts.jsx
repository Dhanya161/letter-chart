import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';
import letterData from './data/letterData.json';


defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Charts() {
  return (
  
    <div className="letterChart" style={{ height: '400px', width: '100%' }}>
      <Line
        data={{
          labels: letterData.map((data) => data.label),
          datasets: [
            {
              label: 'Count',
              data: letterData.map((data) => data.letters),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: '#800080',
              borderWidth: 2,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          
        }}
      />
    </div>
   
  );
}

export default Charts;
