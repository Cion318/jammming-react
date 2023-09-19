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
    <div className="m-10 mx-auto flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Title"
        onChange={handleTermChange}
        className="border border-green-600 px-1 py-1 focus:border-green-500 sm:w-1/2 sm:px-2 sm:py-2 xl:w-1/3"
      />
      <button
        onClick={search}
        className="m-1 border border-green-600 bg-green-600 px-2 py-1 text-white hover:bg-green-600 sm:px-3 sm:py-2"
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
