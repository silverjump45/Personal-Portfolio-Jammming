import React, { useCallback } from 'react';
import './Playlist.css';

import TrackList from '../Tracklist/Tracklist'

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.valu);
        },
        [props.onNameChange]
    );

    return (
        <div className="Playlist">
            <div className="Playlist-controls">
                <input
                    onChange={handleNameChange}
                    value={props.playlistName || 'New Playlist'}
                    />
                <FontAwesomeIcon 
                    icon="fa-regular fa-floppy-disk" 
                    />
            </div>
            <div className="Playlist-tracklist">
                <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
            </div>
        </div>
    );
};

export default Playlist;