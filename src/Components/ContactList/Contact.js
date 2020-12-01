import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ id, name }) {
  return (
    <li key={id} className={styles.contact}>
      {name}
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Contact;
