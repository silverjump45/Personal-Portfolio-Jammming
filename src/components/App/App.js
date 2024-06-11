import React, { useState, useCallback, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './../../css/ToastifyCustom.css'

import SearchBar from './../SearchBar/Searchbar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './..Playlist/Playlist';
import UserPlaylist '../UserPlaylists/UserPlaylists';
import { Spotify } from "../../util/spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    fetchUserPlaylists();
  }, []);

  const fetchUserPlaylists = useCallback(() => {
    Spotify.getUserPlaylists()
      .then((playlists) => {
        setUserPlaylists(playlists);
      })
      .catch((error) => {
        console.error("Error UnServable User Playlist:", error);
      });
  }, []);

  const addTrack = useCallback ((track) => {
    if (!playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
  );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    if (!playlistName || !playlistTracks.lenght) {
      return;
    }

    const trackURIs = playlistTracks.map((track) => track.uri);
    const existingPlaylist = userPlaylists.find((playlist) => playlist.name === playlistName);
  
    if (existingPlaylist) {
      const playlistId = existingPlaylist.id;
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
    
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uris: trackURIs }),
      })
        .then(() => {
          toast.success("Playlist successfully update.", {
            className: 'custom-toast',
            progressClassName: 'custom-progress-bar',
          });
        })
    
        .catch((error) => {
          console.error("Error updating playlist:", error);
        });
    } else {
      Spotify.savePlaylist(playlistName, trackURIs)
        .then((newPlaylist) => {
          toast.success("UP Served Playlist Saved.", {
            className: 'custom-toast',
            progressClassName: 'custom-progress-bar',
          });
          setUserPlaylists((prevPlaylists) +>)
        })
    }
  
  })

}
