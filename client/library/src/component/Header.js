import React, { Fragment} from 'react'

export default function Header() {
    return (
        <Fragment>
        <header>
            <div className="header-inner">
                <div className="rightbox">
                    <h1>Left box</h1>
                </div>
                <div className="leftbox">
                    <h1>Right box</h1>
                </div>
            </div>
        </header>
        </Fragment>
    )
}
