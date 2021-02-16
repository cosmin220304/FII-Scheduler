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

  useEffect(() => {
    const newSelectedGroup = JSON.parse(localStorage.getItem("selectedGroup"))
    setSelectedGroup(newSelectedGroup)
  }, [])

  useEffect(() => {
    const init = async () => {
      if (!selectedGroup) return;

      loadSchedule(selectedGroup)
      const { data: courseMap } = await axios.post(
        '/courses', {
        group: selectedGroup
      })

      let newCourses = {}
      let savedCourses = JSON.parse(localStorage.getItem("course")) || []

      for (let course in courseMap) {
        newCourses[course] = courseMap[course].map(c => ({ name: c, selected: savedCourses.includes(c) }))
      }

      setCourses(newCourses)
    }
    init()
  }, [selectedGroup])

  const updateSchedule = () => {
    let courseList = []
    for (let course in courses) {
      const newCourseListItems = courses[course].filter(c => c.selected).map(c => c.name)
      courseList = [...courseList, ...newCourseListItems]
    }

    const newSchedule = { ...schedule }
    for (let day of Object.keys(newSchedule)) {
      for (let course of newSchedule[day]) {
        course['Selected'] = courseList.includes(course['Disciplina'])
      }
    }

    setSchedule(newSchedule)
  }

  useEffect(() => {
    if (!courses || !schedule) return;
    updateSchedule()
  }, [courses])

  useEffect(() => {
    console.log(schedule)
    if (!schedule) {
      updateSchedule()
    }
  }, [schedule])

  return (
    <div className='app'>
      <h1>FII Organizator</h1>
      <div className='tools'>
        <SelectGroup selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
        <Selectables courses={courses} setCourses={setCourses} />
        <Buttons courses={courses} selectedGroup={selectedGroup} />
      </div>
      <h1>{selectedGroup}</h1>
      <ScheduleView schedule={schedule} />
    </div>
  )
}

export default App
