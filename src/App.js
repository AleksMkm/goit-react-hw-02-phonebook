import React, { Component } from 'react';
import { v4 as uniqueId } from 'uuid'; // после рендера формы
import Container from './Components/Container';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Section from './Components/Section';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: initialState,
  };

  addContact = (name, number) => {
    const newContact = {
      id: uniqueId(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
