import React, { Fragment } from 'react'
import Spinners from './spinner.gif'

function Spinner() {
    return (
        <Fragment>
            <img src={Spinners} alt="" style={{width:"200px", margin: "auto", display: "block"}} />
        </Fragment>
    )
}

export default Spinner
