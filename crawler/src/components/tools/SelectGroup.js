import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

const SelectGroup = ({ setSelectedGroup, selectedGroup }) => {
    const [groupSeletList, setGroupSeletList] = useState()

    useEffect(() => {
        loadGroups()
    }, [])

    useEffect(() => {
        if (groupSeletList) {
            setSelectedGroup(groupSeletList[0].value)
        }
    }, [setSelectedGroup, groupSeletList])

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
        <Select
            placeholder='Cauta o grupa'
            className='select'
            value={selectedGroup}
            onChange={onChangeGroup}
            options={groupSeletList}
            autoFocus
            isSearchable
        />
    )
}

export default SelectGroup
