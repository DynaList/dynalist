import React from "react";
import { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import serverRequest from "../api/backServer";
import UserBanner from "./UserBanner";
import UserNav from "./UserNav";


export default function UserGroupDetails() {

    const {groupId} = useParams()

    const history = useHistory()

    const [group, setGroup] = useState({
        name: "",
        members: "",
        admins: "",
        lists:"",
    })

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch(`http://______/groups/${groupId}`)
            const response = await serverRequest.get(`api/groups/${groupId}`);
            // const resData = await response.json()
            // setGroup(resData)
            console.log(response.data)
            setGroup(response.data)
        }
        fetchData()
    }, [groupId])

    if (group === null) {
        return <h1>Loading</h1>
    }

    async function deleteGroup() {
        await serverRequest.get(`api/groups/${groupId}`, {
            method: 'DELETE'
        })
        // await fetch(`http://________/groups/${group.groupId}`, {
        //     method: 'DELETE'
        // })
        history.push('/groups')
    }
    const members = [group.members]

    const admins = [group.admins]
    
    return(
        <div className="min-h-full">
            <UserNav/>
            <UserBanner title="DynoPack Details"/>
            <main>
                <div className="w-full max-w-md px-2 mt-10 sm:px-0 mx-auto flex space-x-1 p-5"></div>

                <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
                    <div className="px-4 pb-6 sm:px-0">
                        <div className="mt-10 sm:mt-0 overflow-hidden rounded-md bg-white">
                            <div className="md:grid md:grid-cols-2 md:gap-6">
                                <div className="mt-5 md:col-span-2 md:mt-0 px-4 py-5 sm:p-6 text-background-dark-color">
                                    <h2 className="text-background-dark-color my-6 text-center text-3xl font-bold tracking-tight">
                                        {group.name}
                                    </h2>

                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="px-4 py-5 sm:p-6 text-background-dark-color">
                                            <div className="grid grid-cols-4 gap-6">
                                                <div className="col-span-6 sm:col-span-2">
                                                    <h2>Members:</h2>
                                                    {
                                                        members.map(member => <div key={member}>{member}</div>)
                                                    }
                                                </div>
                                                <div className="col-span-6 sm:col-span-2">
                                                    <h2>Admins:</h2>
                                                    {
                                                        admins.map(admin => <div key={admin}>{admin}</div>)
                                                    }
                                                </div>

                                            
                                                <div className="col-span-6 sm:col-span-2">
                                                    <button type="submit" className="flex rounded-md border border-logo-purple b py-2 px-4 text-sm font-medium text-background-dark-color  hover:text-logo-purple focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={deleteGroup}>
                                                        Delete Group
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}