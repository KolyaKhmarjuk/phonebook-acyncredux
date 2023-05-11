import AddForm from './AddForm/AddForm';
import FilterContact from './FilterContact/FilterContact';
import ContactsBook from './ContactsBook/ContactsBook';
import { useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState('');

  const onFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <AddForm />
      <FilterContact onFilter={onFilter} />
      <ContactsBook filter={filter} />
    </>
  );
}
