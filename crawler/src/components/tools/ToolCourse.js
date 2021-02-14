import React from 'react'

const Course = ({ course, setCourses }) => {
    const selected = course.selected ? 'selected' : 'not-selected'

    const clickHandler = () => {
        setCourses((prevCourseMap) => {
            const courseMap = {}
            for (let prevCourse of Object.keys(prevCourseMap)) {
                courseMap[prevCourse] = prevCourseMap[prevCourse].map((c) => {
                    if (c === course) {
                        return {
                            name: course.name,
                            selected: course.selected ? false : true
                        }
                    }
                    return c
                })
            }
            return courseMap
        })
    }

    return (
        <div className={`toolCourse ${selected}`} onClick={clickHandler}>
            {course.name}
        </div>
    )
}

export default Course
