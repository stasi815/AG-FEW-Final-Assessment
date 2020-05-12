import React from 'react';
import data from './metal.json';
import LikeCounter from './LikeCounter';

function Band(props) {
    const { band_name, formed, origin, fans, split, style } = props
    return (
        <div>
            <h1>{ band_name }</h1>
            <p>Year formed: { formed }</p>
            <p>Place of origin: { origin }</p>
            <p>Number of fans: { fans }</p>
            <p>Style: { style }</p>
            <p>Year they disbanded: { split }</p>
            <LikeCounter />
        </div>
    )
}

export default Band
