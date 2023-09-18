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
      <div className="sm:m-3">
        <label className="" htmlFor="accessKey">
          Enter your Spotify Access-Key and get started
        </label>
      </div>
      <div className="sm:m-3">
        <input
          type="password"
          id="accessKey"
          name="AccessKey"
          value={accessKey}
          onChange={handleAccessKeyChange}
          className="border sm:m-3 sm:w-1/2 sm:px-2 lg:w-1/3"
        />
        <a
          href="https://developer.spotify.com/documentation/web-api/concepts/apps"
          target="_blank"
          rel="noreferrer"
          className="sm-m-3 sm:px-2 sm:text-xl"
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
