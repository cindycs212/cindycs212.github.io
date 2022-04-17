import React from 'react'
import './experienceMenu.scss'

export default function ExperienceMenu({ title, id, active, setSelected }) {
    return (
        < div className={active ? 'shadow active' : 'shadow'} id='menuItem' key={id} onClick={() => setSelected(id)}>
            <button type='button' className='btn btn-link'>{title}</button>
        </div >
    )
}
