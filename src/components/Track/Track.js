import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {

    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        }, [props.onAdd, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (<button className="Track-action" onClick={removeTrack}>-</button>);
        } else {
            return (<button className="Track-action" onClick={removeTrack}>+</button>);
        }
    }

    return (
        <div className="Track">
            <div className="Track-infomation">
                <h1>{props.track.name}</h1>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;