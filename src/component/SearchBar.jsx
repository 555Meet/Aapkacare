const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full max-w-full px-4 py-2 border border-gray-700 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base mb-4"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;
