import React, { useState } from 'react'
import ScheduleView from './ScheduleView'
import '../assets/App.css'
import Tools from './tools/Tools'

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState()

  return (
    <div className='app'>
      <h1>FII ORAR</h1>
      <Tools selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      <h1>{selectedGroup}</h1>
      <ScheduleView group={selectedGroup} />
    </div>
  )
}

export default App
