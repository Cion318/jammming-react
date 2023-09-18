import PropTypes from "prop-types";
import Tracklist from "./Tracklist";

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="sm:w-100 m-5 border border-green-600 bg-zinc-800 xl:w-1/2">
      <h2 className="text-white-900 m-5 p-3 text-2xl font-bold">
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
