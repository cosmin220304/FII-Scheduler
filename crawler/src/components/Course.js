import React from 'react'

const Course = ({ info }) => {
    if (!info['Selected']) {
        return null
    }

    return (
        <div className={`course ${info['Tip']}`}>
            {info['Disciplina']}
        </div>
    )
}

export default Course
