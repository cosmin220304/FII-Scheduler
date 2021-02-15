import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UseSchedule from '../utils/UseSchedule'
import ScheduleView from './ScheduleView'
import SelectGroup from './tools/SelectGroup'
import Selectables from './tools/Selectables'
import Buttons from './tools/Buttons'
import '../assets/App.css'
import '../assets/Tools.css'

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState()
  const [schedule, setSchedule, loadSchedule] = UseSchedule()
  const [courses, setCourses] = useState()

  const loadCourses = async () => {
    const { data: courseMap } = await axios.post(
      '/courses', {
      group: selectedGroup
    })

    let newCourses = {}
    for (let course in courseMap)
    {
      let courseList = courseMap[course].map(c => ({name:c, selected: true}))
      newCourses[course] = courseList
    }
    setCourses(newCourses)
  }

  useEffect(() => {
    if (selectedGroup) {
      loadSchedule(selectedGroup)
      loadCourses()
    }
  }, [selectedGroup])

  useEffect(() => {
    if (courses && schedule) {
      let courseList = []
      for (let course in courses)
      {
        const newCourseListItems = courses[course].filter(c=>c.selected).map(c=>c.name)
        courseList = [...courseList, ...newCourseListItems]
      }

      const newSchedule = {...schedule}
      for(let day of Object.keys(newSchedule)) {
        for (let course of newSchedule[day]) {
          course['Selected'] = courseList.includes(course['Disciplina'])
        }
      }
      setSchedule(newSchedule)
    }
  }, [courses])


  return (
    <div className='app'>
      <h1>Organizator</h1>
      <div className='tools'>
        <SelectGroup selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
        <Selectables courses={courses} setCourses={setCourses} />
        <Buttons />
      </div>
      <h1>{selectedGroup}</h1>
      <ScheduleView schedule={schedule} />
    </div>
  )
}

export default App
