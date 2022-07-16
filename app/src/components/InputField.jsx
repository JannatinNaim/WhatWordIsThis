function InputField({ onChangeHandler, searchQuery, setSearchQuery }) {
  return (
    <input
      className="search-input"
      name="search_query"
      placeholder="Enter your word..."
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        onChangeHandler(e.target.value);
      }}
    />
  );
}

export default InputField;
