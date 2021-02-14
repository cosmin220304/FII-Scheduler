import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const SelectCourse = ({ category, courseList }) => {
    const [courses, setCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])

    useEffect(() => {
        let newCourses = []
        for (let course of courseList) {
            const newCourse = {
                value: course,
                label: course
            }
            newCourses.push(newCourse)
        }
        setCourses(newCourses)
    }, [courseList])

    useEffect(() => {
        console.log(selectedCourses)
    }, [selectedCourses])

    const onChangeCourse = (courses) => {
        setSelectedCourses(courses.map(c => c.value))
    }

    return (
        <Select
            placeholder={`${category}`}
            className='selectCourse'
            onChange={onChangeCourse}
            options={courses}
            autoFocus
            isSearchable
            isMulti
        />
    )
}

export default SelectCourse
