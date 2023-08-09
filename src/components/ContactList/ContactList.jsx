import ContactListItem from "components/ContactListItem";
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/selectors";

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