import React from 'react';

function UserPlaylists({ playlists, onSelect, onCreateNewPlaylist }) {
    return (
        <div className="UserPlaylists">
            <h1>UP Served PLaylist</h1>
                <h2>CAREFUL! It's hOt!</h2>
                <ul>
                    {playlists.map(playlist => (
                        <li key={playlist.id} onClick={() => onSelect(playlist)}>
                            {playlist.name}
                        </li>
                    ))};
                </ul>
                <button className="new-playlist" onClick={onCreateNewPlaylist}>GET UP Served</button>
        </div>
    );
}

export default UserPlaylists;