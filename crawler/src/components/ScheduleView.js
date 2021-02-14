import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import UseSchedule from '../utils/UseSchedule'
import DayView from './DayView'

const ScheduleView = ({ group }) => {
    const [isLoading, schedule] = UseSchedule({ group })
    const hours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00']

    if (isLoading || !group) {
        return null
    }

    return (
        <div className="schedule">
            <div className="hours">
                <div className="hours__title">
                    Day
                </div>
                {hours.map((hour) =>
                    <div key={uuidv4()} className="hour"> {hour} </div>
                )}
            </div>
            <div className="days">
                {Object.keys(schedule).map((day) =>
                    <div key={uuidv4()}>
                        <DayView day={day} courses={schedule[day]} />
                    </div>
                )}
            </div>
        </div >
    )
}

export default ScheduleView
