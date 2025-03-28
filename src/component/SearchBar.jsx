const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border p-2 md:w-7xl w-full mb-4 rounded md:mx-14 mx-auto"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;
