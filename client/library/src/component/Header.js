import React, { Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <Fragment>
        <header>
            <div className="header-inner">
                <div className="leftbox">
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                    <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder = "Search..."
                    />
                </div>
                <div className="rightbox">
                    <img src="https://via.placeholder.com/50" alt="user pix"/>
                    <FontAwesomeIcon icon={faCaretDown} className = "arrDown" />
                </div>
            </div>
        </header>
        </Fragment>
    )
}
