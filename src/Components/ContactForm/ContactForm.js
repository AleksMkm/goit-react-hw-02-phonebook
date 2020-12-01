import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
    e.currentTarget[1].blur();
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ name: currentTarget.value });
  };

  render() {
    const { name } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={styles.addField}
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
