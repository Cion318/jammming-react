import { useCallback, useState } from "react";
import "./App.css";
import AccessKey from "./components/AccessKey";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spotify from "./utils/Spotify";

function App() {
  const [clientId, setClientId] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleAccessKeyChange = (newAccessKey) => {
    setClientId(newAccessKey);
  };

  const search = useCallback(
    (term) => {
      Spotify.search(term, clientId).then(setSearchResults);
    },
    [clientId],
  );

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks],
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id),
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris, clientId).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks, clientId]);

  return (
    <div>
      <h1 className="text-white-900 my-10 text-5xl font-bold sm:text-7xl lg:text-8xl">
        Ja<span className="text-green-600">mmm</span>ing
      </h1>
      <h2 className="text-white-800 m-5 text-sm sm:m-10 sm:text-lg lg:text-xl">
        Your source to create fast Spotify playlists.
      </h2>
      <div>
        <AccessKey onAccessKeyChange={handleAccessKeyChange} />
        <SearchBar onSearch={search} />
        <div className="lg:flex">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
