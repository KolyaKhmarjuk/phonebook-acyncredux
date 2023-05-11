export default function FilterContact({ onFilter }) {
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          onChange={onFilter}
          className="inputFilter"
        />
      </label>
    </>
  );
}
