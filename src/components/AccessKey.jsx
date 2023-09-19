import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

const AccessKey = ({ onAccessKeyChange }) => {
  const [accessKey, setAccessKey] = useState("");

  const handleAccessKeyChange = (e) => {
    setAccessKey(e.target.value);
    onAccessKeyChange(e.target.value);
  };

  return (
    <>
      <div>
        <label className="text-sm sm:text-lg" htmlFor="accessKey">
          Enter your Spotify Access-Key
        </label>
      </div>
      <div className="mx-auto">
        <input
          type="password"
          id="accessKey"
          name="AccessKey"
          value={accessKey}
          onChange={handleAccessKeyChange}
          className="md: m-2 w-2/3 border sm:w-1/2 sm:px-2 md:w-1/3"
        />
        <a
          href="https://developer.spotify.com/documentation/web-api/concepts/apps"
          target="_blank"
          rel="noreferrer"
          className="m-3 sm:px-2 sm:text-xl"
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
        </a>
      </div>
    </>
  );
};

AccessKey.propTypes = {
  onAccessKeyChange: PropTypes.func,
};

export default AccessKey;
