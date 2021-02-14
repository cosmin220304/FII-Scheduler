import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CourseGroup from './CourseGroup'

const DayView = ({ day, courses }) => {
    const [courseMap, setCourseMap] = useState([])

    useEffect(() => {
        const newCourseMap = {
            '08:00': [],
            '10:00': [],
            '12:00': [],
            '14:00': [],
            '16:00': [],
            '18:00': []
        }
        for (let course of courses) {
            newCourseMap[course['De la']].push(course)
        }
        setCourseMap(newCourseMap)
    }, [courses])

    return (
        <div className="day">
            <div className="day__title">
                {day}
            </div>
            {Object.keys(courseMap).map((hour) =>
                <div key={uuidv4()}>
                    <CourseGroup courses={courseMap[hour]} />
                </div>
            )}
        </div>
    )
}

export default DayView
