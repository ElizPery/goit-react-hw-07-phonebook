import css from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleAddContact = (name, number) => {
        if (
         contacts.find(
           contact =>
             contact.name.toLocaleLowerCase() ===
               name.toLocaleLowerCase() ||
             contact.number === number
         )
       ) {
            Notify.warning(`${name} or ${number} is already in contacts`);
         return;
        }
        
        dispatch(addContact(name, number))
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        handleAddContact(name, number);

        setName('');
        setNumber('');
    }

    const handleChangeData = ({ currentTarget }) => {
        const { name, value } = currentTarget;

        switch (name) {
          case 'name':
            setName(value);
            break;

          case 'number':
            setNumber(value);
            break;

          default:
            break;
        }
    }

    return (<form onSubmit={onFormSubmit} className={css.contactForm}>
        <label className={css.contactInputData}>
            Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    className={css.contactInputItem}
                    onChange={handleChangeData}
                    required
                />
            </label>
            <label className={css.contactInputData}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    className={css.contactInputItem}
                    onChange={handleChangeData}
                    required
                />
            </label>
            <button type="submit" className={css.submitNewContact}>Add contact</button>
        </form>)
}
