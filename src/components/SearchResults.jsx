import PropTypes from "prop-types";
import Tracklist from "./Tracklist";

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="bg-zinc-800 m-10 w-1/2 border border-green-600 rounded-md">
      <h2 className="m-10 p-3 text-2xl font-bold text-white-900">
        Search Results
      </h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} />
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default SearchResults;
