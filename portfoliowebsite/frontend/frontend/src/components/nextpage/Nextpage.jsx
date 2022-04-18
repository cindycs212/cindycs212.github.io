import React from 'react'
import './nextpage.scss'

export default function Nextpage({ page }) {
    return (
        <div className='container' id='nextpage'>
            <a href={page} id='link'>
                <img src="/imgs/down.png" alt="arrow" id='arrow' />
            </a>
        </div>
    )
}
