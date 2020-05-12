import React from 'react';
import Band from './Band';
import './BandsList.css'
;import data from './metal.json';

function BandList() {

    const bands = data.map(({ band_name, formed, origin, fans, style, split }) => {
        return (
            <Band
                key = { band_name }
                band_name = { band_name }
                formed = { formed }
                origin = { origin }
                style=  { style }
                split = { split }  
                fans = { fans }
            />
        )
    })

    return (
        <div className='BandsList'>
            { bands }
        </div>
    )
}

export default BandList
