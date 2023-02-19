import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { getFilteredContacts } from 'utils/utils';
import Natification from 'components/Natification';
import ContactItem from 'components/ContectItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const name = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(name, contacts);

  return filteredContacts.length === 0 ? (
    <Natification title={name}></Natification>
  ) : (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default ContactList;
