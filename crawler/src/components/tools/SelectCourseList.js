import React from 'react'
import SelectCourse from './SelectCourse'
import { v4 as uuidv4 } from 'uuid'

const SelectCourseList = ({courses, selectedGroup}) => {
    if (!courses) {
        return null
    }

    return (
        <div className="selectCourseList">
            {Object.keys(courses).map((name) =>
                <SelectCourse
                    key={uuidv4()}
                    category={name}
                    courseList={courses[name]}
                    selectedGroup={selectedGroup}
                />
            )}
        </div>
    )
}

export default SelectCourseList
