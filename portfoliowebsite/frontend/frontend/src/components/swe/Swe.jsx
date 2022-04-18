import React from 'react'
import './swe.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'


export default function Swe() {
    return (
        <div id='swe'>
            <ul>
                <li><span>
                    I'm freelancing to build <span id='emphasize'>websites</span> for clients
                </span></li>
                <li>
                    <span>Check out my <a href='#'>Github</a></span>
                    <span className='m-2'> or </span>
                    see some <a href='#'>highlights</a>!
                </li>
                <li><span>
                    I'm a big fan of:
                    <ul id='stack'>
                        <li><span id='emphasize'>Python</span></li>
                        <li><span id='emphasize'>Javascript</span></li>
                        <li><span id='emphasize'>React</span></li>
                        <li><span id='emphasize'>Django</span></li>
                        <li><span id='emphasize'>Sass</span></li>
                        <li><span id='emphasize'>Java</span></li>
                    </ul>
                </span></li>
            </ul>
        </div>
    )
}
