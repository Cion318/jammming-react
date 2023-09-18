import PropTypes from "prop-types";
import { useCallback, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Title"
        onChange={handleTermChange}
        className="w-1/2 px-4 py-2 border border-green-600 rounded-md focus:ring focus:ring-green-500 focus:border-green-500"
      />
      <button
        onClick={search}
        className="m-10 px-20 text-white bg-green-500 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
