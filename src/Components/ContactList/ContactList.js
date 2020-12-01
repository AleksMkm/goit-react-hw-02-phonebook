import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import styles from './ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact =>
        Contact({ id: contact.id, name: contact.name, phone: contact.number }),
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
