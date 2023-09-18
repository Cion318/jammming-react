import PropTypes from "prop-types";
import Track from "./Track";

const Tracklist = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className="px-10">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  isRemoval: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Tracklist;
