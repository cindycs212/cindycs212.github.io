import React from 'react'
import './nextpage.scss'
import arrow from './../../assets/down.png'


export default function Nextpage({ page }) {
    return (
        <div className='container' id='nextpage'>
            <a href={page} id='link'>
                <img src={arrow} alt="arrow" id='arrow' />
            </a>
        </div>
    )
}
