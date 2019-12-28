import React, { Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <Fragment>
        <header>
            <div className="header-inner">
                <div className="rightbox">
                <FontAwesomeIcon icon={faSearch} />
                    <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder = "Search text here"
                    />
                </div>
                <div className="leftbox">
                    <img src="https://via.placeholder.com/50" alt="user pix"/>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </header>
        </Fragment>
    )
}
