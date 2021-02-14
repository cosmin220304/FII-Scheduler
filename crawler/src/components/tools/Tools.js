import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SelectGroup from './SelectGroup'
import SelectCourseList from './SelectCourseList'
import Legend from './Legend'
import '../../assets/Tools.css'

const Tools = ({ selectedGroup, setSelectedGroup }) => {
  const [courses, setCourses] = useState()

  const loadCourses = async () => {
    const { data } = await axios.post(
      '/courses', {
      group: selectedGroup
    })
    setCourses(data)
  }

  useEffect(() => {
    loadCourses()
  }, [selectedGroup])

  return (
    <div className='tools'>
      <SelectGroup selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      <Legend />
      <SelectCourseList courses={courses} selectedGroup={selectedGroup} />
      <div className="tools__buttons">
        <button>
          Export
        </button>
        <button>
          Save
        </button>
        <button>
          Load
        </button>
        <button>
          Search
        </button>
      </div>
    </div>
  )
}

export default Tools
