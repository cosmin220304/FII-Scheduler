import React from 'react'

const Legend = () => {
    return (
        <div className="legend">
            <div className='red-square'></div>
            <div> = seminar </div>
            <div className='blue-square'></div>
            <div> = curs</div>
            <label>
                <input type="checkbox" />
                Seminare
            </label>
            <label>
                <input type="checkbox" />
                Cursuri
            </label>
        </div>
    )
}

export default Legend
