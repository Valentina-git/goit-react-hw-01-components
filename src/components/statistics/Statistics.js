import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styledStatistic';

const Statistics = ({ title, stats }) => {
  // const randomColorSwitch = () => {
  const colors = [
    '#00FFFF',
    '#FF0000',
    '#ADFF2F',
    '#2196F3',
    '#4CAF50',
    '#009688',
    '#006400',
    '#7FFFD4',
    '#FF9800',
    '#FF00FF',
    '#FFFF00',
    '#DAA520',
    '#008080',
    '#00FF00',
    '#FF8C00',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // const styles = {
  //   container: {
  //     backgroundColor: colors[randomIntegerFromInterval(0, colors.length - 1)],
  //   },
  // };
  // };

  return (
    <Wrapper>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list list">
          {stats.map(stat => (
            // <li key={stat.id} className="item" style={styles.container}></li>

            <li
              key={stat.id}
              className="item"
              style={{
                backgroundColor:
                  colors[randomIntegerFromInterval(0, colors.length - 1)],
              }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}&#37;</span>
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
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
