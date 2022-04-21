import React from 'react'
import './experience.scss'
import { useState } from 'react';
import ExperienceMenu from '../experienceMenu/ExperienceMenu';
import Education from '../education/Education';
import Swe from '../swe/Swe';
import Finance from '../finance/Finance';
import BizOps from '../bizops/BizOps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'


export default function Experience() {
    const [selected, setSelected] = useState('education');
    const menu = [
        {
            id: 'education',
            title: '.education',
        },
        {
            id: 'swe',
            title: '.software engineering',
        },
        {
            id: 'bizops',
            title: '.analytics & strategy',
        },
        {
            id: 'finance',
            title: '.finance',
        },
    ]


    return (
        <div className='container-fluid' id='experience'>
            {/* <div className='bg-image'> */}
            <h1 id='title'>Professional Experience</h1>
            <div className='row'>
                <div className='col-4' id='menu'>
                    {menu.map((item) => (
                        // pass set selected function so that experience menu can set state based on click
                        // set active state if the selected id is same as this item id
                        <ul key={item.id}>
                            <ExperienceMenu
                                title={item.title}
                                id={item.id}
                                active={selected === item.id}
                                setSelected={setSelected}
                            />
                            {/* set active on selected menu item so that arrow shows, otherwise it is transparent */}
                            <FontAwesomeIcon icon={faAnglesRight} className={selected === item.id ? 'active' : ''} id='arrow' />
                        </ul>
                        // < div className='shadow' id='menuItem' key={item.id} >
                        //     <button type='button' className='btn btn-link'>{item.title}</button>
                        // </div>
                    ))}
                </div>
                <div className='col-8' id='description'>
                    {selected === 'education' && <Education />}
                    {selected === 'swe' && <Swe />}
                    {selected === 'finance' && <Finance />}
                    {selected === 'bizops' && <BizOps />}
                </div>
            </div>
            {/* </div> */}
        </div >
    )
}
