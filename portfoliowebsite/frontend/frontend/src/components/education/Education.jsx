import React from 'react'
import './education.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'


export default function Education() {
    return (
        <div className='' id='education'>
            <ul>
                <li><span>
                    I graduated from <span id='emphasize'>Columbia University</span> with degree in
                    <span id='emphasize'> Computer Science</span> and <span id='emphasize'>Economics</span>
                </span></li>
                <li><span>
                    My favorite course project was creating a mobile <span id='emphasize'>augmented reality</span> game using <FontAwesomeIcon icon="fa-brands fa-unity" /><span id='emphasize'>Unity</span>!
                </span></li>
                <li><span>
                    Loved my college years in NYC so much that I continued to work in the city <span id='icon'>😄</span>
                </span></li>
            </ul>
            <img src='/imgs/cu.svg.png' id='cu' alt="crest1" />
            <img src='/imgs/seas.svg.png' id='seas' alt="crest2" />
        </div >
    )
}
