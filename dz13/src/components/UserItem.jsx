import React from 'react';
import styles from '../styles/UserItem.module.css';

const UserItem = ({ name }) => {
  return <li className={styles.userItem}>{name}</li>;
};

export default UserItem;