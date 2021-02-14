import { useState } from 'react'
const axios = require('axios').default

const UseSchedule = () => {
    const [schedule, setSchedule] = useState()

    const loadSchedule = async (group) => {
        if (!group) return []

        let newSchedule = {}
        let dayValue = []
        let day = ''

        const { data } = await axios.post(
            '/schedule', {
            group: group
        })

        for (let line of data) {
            const isDayOfWeek = Object.keys(line).length === 1
            if (isDayOfWeek) {
                if (day) {
                    newSchedule[day] = dayValue
                }
                day = line['De la'].slice(0, 2)
                dayValue = []
            } else {
                dayValue.push(line)
            }
        }
        newSchedule[day] = dayValue

        const days = ['Lu', 'Ma', 'Mi', 'Jo', 'Vi']
        const finalSchedule = {}
        for (let day of days) {
            finalSchedule[day] = newSchedule[day] || []
        }

        setSchedule(finalSchedule)
    }

    return [schedule, setSchedule, loadSchedule]
}

export default UseSchedule
