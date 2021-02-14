import React from 'react'

const Course = ({ info }) => {
    return (
        <div className={`course ${info['Tip']}`}>
            {info['Disciplina']}
        </div>
    )
}

export default Course
