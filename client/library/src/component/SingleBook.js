import React from 'react'

export default function SingleBook({image, title, author}) {
    return (
        <div className = "single-book">
        <div className="img-container">
            <img src={image} alt="book paperback" className = 'img-fluid'/>
        </div>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    )
}
