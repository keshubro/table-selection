import React from 'react'
import { useDetails } from '../contexts/DetailsContext'

function DetailsComponent(props) {
    const selectedData = useDetails()
    
    return (
        <div>
            det
        </div>
    )
}

export default DetailsComponent
