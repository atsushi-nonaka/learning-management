import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
    <div>
        <h3>お探しのページがありませんでした</h3>
        <Link to="/">Home</Link>
    </div>
)