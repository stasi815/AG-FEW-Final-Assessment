import React from 'react';
import data from './metal.json'

function BandCount() {
    return (
        "Total Bands: " + data.length
    )
}

export default BandCount
