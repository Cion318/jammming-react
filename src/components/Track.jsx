import PropTypes from "prop-types";
import { useCallback } from "react";

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button onClick={removeTrack} className="m-1 text-white sm:text-7xl">
          -
        </button>
      );
    }
    return (
      <button onClick={addTrack} className="m-1 text-white sm:text-4xl">
        +
      </button>
    );
  };

  return (
    <div className="m-5 mx-auto flex items-center justify-between border-b border-green-500 px-5 text-left">
      <div className="m-1 py-2 ">
        <h2 className="text-sm font-medium text-white">{track.name}</h2>
        <div className="flex">
          <p className="text-white-700 text-sm">{track.artist} &nbsp; </p>
          <p className="text-white-700 hidden text-sm md:block">
            | {track.album} &nbsp;{" "}
          </p>
        </div>
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
