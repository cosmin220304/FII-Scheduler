import React from 'react'

const Butons = ({ courses, selectedGroup }) => {

  const save = () => {
    let courseList = []
    for (let course in courses) {
      const newCourseListItems = courses[course].filter(c => c.selected).map(c => c.name)
      courseList = [...courseList, ...newCourseListItems]
    }
    localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup))
    localStorage.setItem('course', JSON.stringify(courseList))
  }

  return (
    <div className="tools__buttons">
      <button>
        Export
      </button>
      <button onClick={save}>
        Save
      </button>
    </div>
  )
}

export default Butons
