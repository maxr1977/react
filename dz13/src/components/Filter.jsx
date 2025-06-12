import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.filterInput}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps, { setFilter })(Filter);