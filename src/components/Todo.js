import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


export const ToDo = ({task}) => {
  return (
    <div className='Todo'>
        <p>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />

        </div>
    </div>
  )
}
