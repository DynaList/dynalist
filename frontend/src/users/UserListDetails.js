import React from "react";
import { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'


export default function UserListDetails() {

    const {listId} = useParams()

    const history = useHistory()

    const [list, setList] = setState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://______/lists/${listId}`)
            const resData = await response.json()
            setList(resData)
        }
        fetchData()
    }, [listId])

    if (list === null) {
        return <h1>Loading</h1>
    }

    async function deleteItem(e) {
        await fetch(`http://________/lists/${list.listId}/e.key`, {
            method: 'DELETE'
        })
        history.push('/lists')
    }
    const items = [list.items]
    
    return(
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{list.group}</h1>
                    
                </div>
                <div>
                    <h2>Items:</h2>
                    {
                        items.map(item => <div key={item}>{item}</div>)
                    }
                </div>
                

            </div>
            <div>
                <button>Add Item</button>
                <button type="submit" className="btn btn-danger" onClick={deleteItem}>
                    Delete item
                </button>
            </div>
        </main>
    )
}