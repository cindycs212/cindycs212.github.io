import React from 'react'
import './experienceMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function ExperienceMenu({ title, id, active, setSelected }) {
    return (
        < div className={active ? 'shadow active' : 'shadow'} id='menuItem' key={id} onClick={() => setSelected(id)}>
            <button type='button' className='btn btn-link'>
                {title}
                {/* <FontAwesomeIcon icon={faAnglesRight} id='arrow' /> */}
            </button>
        </div >
    )
}
