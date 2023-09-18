import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="m-10 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Title"
        onChange={handleTermChange}
        className="border border-green-600 px-2 py-2 focus:border-green-500 sm:w-1/2 xl:w-1/3"
      />
      <button
        onClick={search}
        className="m-1 bg-green-500 px-3 py-2 text-white hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
