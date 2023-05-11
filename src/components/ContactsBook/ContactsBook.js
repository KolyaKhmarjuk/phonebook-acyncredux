import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';

export default function ContactsBook({ filter }) {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterNormalized = filter.toLowerCase();

  const getFilteredContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => contact.name.includes(filterNormalized));
  };

  const filteredContacts = getFilteredContacts(contacts, filterNormalized);

  return (
    <ul>
      {filteredContacts?.map(contact => (
        <li className="contactItem" key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className="deleteBtn"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
