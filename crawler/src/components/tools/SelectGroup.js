import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

const SelectGroup = ({ setSelectedGroup, selectedGroup }) => {
    const [groupSeletList, setGroupSeletList] = useState()

    useEffect(() => {
        loadGroups()
    }, [])

    const loadGroups = async () => {
        const { data } = await axios.get('/groups')
        let newGroupSeletList = [{ value: '', label: '' }]
        for (let i = 0; i < data.length; i++) {
            const newGroup = {
                value: data[i],
                label: data[i]
            }
            newGroupSeletList.push(newGroup)
        }
        setGroupSeletList(newGroupSeletList)
    }

    const onChangeGroup = (group) => {
        setSelectedGroup(group.value)
    }

    return (
        <div className='selectGroup'>
            <h2>Alege grupa:</h2>
            <Select
                placeholder='Cauta o grupa'
                value={selectedGroup}
                onChange={onChangeGroup}
                options={groupSeletList}
                autoFocus
                isSearchable
            />
        </div>
    )
}

export default SelectGroup
