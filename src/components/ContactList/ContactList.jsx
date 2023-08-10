import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { selectVisibleContacts } from "redux/selectors";
import css from './ContactList.module.css';

const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return <ul className={css.listOfContacts}>{visibleContacts.map(element => {
        return <ContactListItem
            key={element.id}
            id={element.id}
            name={element.name}
            number={element.number}/>
    })}</ul>
}

export default ContactList;