import React from "react";
import { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { Tab } from '@headlessui/react'


export default function UserGroupDetails() {

    const {groupId} = useParams()

    const history = useHistory()

    const [group, setGroup] = setState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://______/groups/${groupId}`)
            const resData = await response.json()
            setGroup(resData)
        }
        fetchData()
    }, [groupId])

    if (group === null) {
        return <h1>Loading</h1>
    }

    async function deleteGroup() {
        await fetch(`http://________/places/${group.groupId}`, {
            method: 'DELETE'
        })
        history.push('/groups')
    }
    const members = [group.members]

    const admins = [group.admins]
    
    return(
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{group.name}</h1>
                    
                </div>
                <div>
                    <h2>Members:</h2>
                    {
                        members.map(member => <div key={member}>{member}</div>)
                    }
                </div>
                <div>
                    <h2>Admins:</h2>
                    {
                        admins.map(admin => <div key={admin}>{admin}</div>)
                    }
                </div>

            </div>
            <div>
                <button type="submit" className="btn btn-danger" onClick={deleteGroup}>
                    Delete Group
                </button>
            </div>
        </main>
    )
}