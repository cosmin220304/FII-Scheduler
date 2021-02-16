import React from 'react'
import ToolCourse from './ToolCourse'
import { v4 as uuidv4 } from 'uuid'

const CoursesGroup = ({ name, courses, setCourses }) => {
    return (
        <div className='toolCourseGroup'>
            <span>{name}</span>
            {courses.map((course) =>
                <ToolCourse key={uuidv4()} course={course} setCourses={setCourses} />
            )}
        </div>
    )
}

export default CoursesGroup
