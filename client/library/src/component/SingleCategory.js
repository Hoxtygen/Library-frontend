import React, { Fragment } from 'react'

export default function SingleCategory({category}) {
    return (
        <Fragment>
            <a href="/" className="category-name single-category">{category}</a>
        </Fragment>
    )
}
