import React from 'react'
import Course from './Course'
import { v4 as uuidv4 } from 'uuid'

const CourseGroup = ({ courses }) => {
    return (
        <div className="courseGroup">
            {
                courses.map((course) =>
                    <Course key={uuidv4()} info={course} />
                )
            }
        </div>
    )
}

export default CourseGroup
