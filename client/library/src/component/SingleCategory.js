import React from 'react'

export default function SingleCategory({category}) {
    return (
        <div className = "single-category">
            <a href="/" className="category-name">{category}</a>
        </div>
    )
}
