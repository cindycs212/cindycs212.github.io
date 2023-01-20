import React from 'react'
import './finance.scss'
import excel from './../../assets/excel.jpg'
import citi from './../../assets/citi.png'

export default function Finance() {
    return (
        <div id='finance'>
            <ul>
                <li><span>
                    I've worked at <span id='emphasize'>Citi</span> as a financial and strategic analyst
                </span></li>
                <li><span>
                    <span id='emphasize'>Automated processes</span> using
                    <span id='emphasize'>VBA</span> to increase efficiency of data analysis and reporting by 80%
                </span></li>
                <li><span>
                    Developed P&L models for the $2B global HQ project
                </span></li>
            </ul>
            {/* <img src={excel} id='excel' alt="" />
            <img src={citi} id='citi' alt="" /> */}
        </div>
    )
}
