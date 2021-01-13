import React from 'react';
import PropTypes from 'prop-types';
import WrapperStatic from './styledStatistic';
import { randomIntegerFromInterval } from '../../utils/colors';

const Statistics = ({ title, stats }) => {
  return (
    <WrapperStatic>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list list">
          {stats.map(stat => (
            <li
              key={stat.id}
              className="item"
              style={{
                backgroundColor: randomIntegerFromInterval(),
              }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}&#37;</span>
            </li>
          ))}
        </ul>
      </section>
    </WrapperStatic>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
