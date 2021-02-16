import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Switch } from 'pretty-checkbox-react'
import ToolCoursesGroup from './ToolCoursesGroup'
import '@djthoms/pretty-checkbox'

const Selectables = ({ courses, setCourses }) => {
    const [showSeminars, setShowSeminars] = useState(true)
    const [showCourses, setShowSCourses] = useState(true)

    if (!courses) {
        return null;
    }

    return (
        <div className="selectables">
            <h2>Alege materiile care te intereseaza:</h2>
            <div>
                <Switch
                    shape="fill"
                    color="danger"
                    onChange={(e) => setShowSeminars(e.target.checked)}
                    checked={showSeminars}
                >
                    = seminare
                </Switch>

                <Switch
                    shape="fill"
                    color="info"
                    onChange={(e) => setShowSCourses(e.target.checked)}
                    checked={showCourses}
                >
                    = cursuri
                </Switch>
            </div>

            {Object.keys(courses).map((name) =>
                <div key={uuidv4()}>
                    <ToolCoursesGroup name={name} courses={courses[name]} setCourses={setCourses} />
                </div>
            )}

        </div>
    )
}

export default Selectables
