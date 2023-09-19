import PropTypes from "prop-types";
import { useCallback } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({ onNameChange, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = useCallback(
    (e) => {
      onNameChange(e.target.value);
    },
    [onNameChange],
  );

  return (
    <div className="m-5 mx-auto w-5/6 border border-green-600 bg-zinc-800 lg:m-5 xl:w-1/2">
      <input
        className="text-white-900 m-10 mx-auto w-2/3 border-b border-green-600 bg-zinc-800 px-2 py-3"
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
      />
      <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button
        onClick={onSave}
        className="m-5 mx-auto bg-green-500 px-10 py-2 text-white hover:bg-green-600"
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
