import PropTypes from "prop-types";
import { useCallback } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({ onNameChange, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = useCallback(
    (e) => {
      onNameChange(e.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="bg-zinc-800 m-10 w-1/2 border border-green-600 rounded-md">
      <input
        className="m-10 p-3 text-white-900 border border-green-600 rounded-md"
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
      />
      <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button
        onClick={onSave}
        className="m-10 px-20 text-white bg-green-500 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
      >
        Save to Spotify
      </button>
    </div>
  );
};

Playlist.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  playlistTracks: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Playlist;
