import PropTypes from "prop-types";
import { useCallback } from "react";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = useCallback(
    (e) => {
      e.preventDefault();
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (e) => {
      e.preventDefault();
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button
          onClick={removeTrack}
          className="m-4 px-4 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
        >
          -
        </button>
      );
    }
    return (
      <button
        onClick={addTrack}
        className="m-4 px-4 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
      >
        +
      </button>
    );
  };

  return (
    <div className="m-5 px-5 mx-auto rounded-md shadow-lg bg-gray-700 text-left flex justify-between">
      <div className="m-1 py-2 ">
        <h2 className="text-xl font-medium text-white">{track.name}</h2>
        <p className="text-white-700">
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemoval: PropTypes.bool.isRequired,
};

export default Track;
