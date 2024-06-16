import React, { useCallback } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/Tracklist.js'

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
                <i class="fa-regular fa-floppy-disk"></i>
            </div>
            <div className="Playlist-tracklist">
                <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
            </div>
        </div>
    );
};

export default Playlist;