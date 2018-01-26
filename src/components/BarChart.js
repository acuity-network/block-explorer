import React from 'react';
import PropTypes from 'prop-types';

// TODO: move the css to the stylesheets after merge
import './BarChart.scss';

const BarChart = ({ values = [], title = '' }) => {
  const barWidth = 100 / values.length;
  const maxValue = Math.max.apply(null, values);
  const minValue = Math.min.apply(null, values);
  const difference = maxValue - minValue;

  const heights = values.map(value => (value - minValue) / difference * 100);

  return [
    <h2 key='title'>{title}</h2>,
    <div className='bar-chart' key='chart'>
      {heights.map((height, index) => {
        return (
          <div className='bar-chart__item' key={index} style={{
            flexBasis: `${barWidth}%`,
            height:   `${height}%`,
          }} />
        );
      })}
    </div>
  ];
};

BarChart.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
};

export default BarChart;
