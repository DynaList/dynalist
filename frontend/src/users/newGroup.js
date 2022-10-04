import { useState } from "react"
import { useHistory } from "react-router-dom"

function NewGroup() {

	const history = useHistory()

	const [group, setGroup] = useState({
		name: '',
        members: '',
        admins: '',
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(``, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(group)
		})

		history.push('/dashboard')
	}

	return (
		<main style={{margin: '15px'}}>
			<h1>Add a New Group</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group" style={{margin:'15px'}}>
					<label htmlFor="name">Group Name: </label>
					<input style={{color: 'black'}}
						required
						value={group.name}
						onChange={e => setGroup({ ...group, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group" style={{margin:'15px'}}>
					<label htmlFor="members">Group members: </label>
					<input style={{color: 'black'}}
						required
						value={group.members}
						onChange={e => setGroup({ ...group, members: e.target.value })}
						className="form-control"
						id="founded"
						name="founded"
					/>
                    <button style={{border: '1px solid white', margin: '10px'}}>Add another member?</button>
				</div>
				<div className="form-group" style={{margin:'15px'}}>
					<label htmlFor="admins">Group admins: </label>
					<input style={{color: 'black'}}
						value={group.admins}
						onChange={e => setGroup({ ...group, admins: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
                    <button style={{border: '1px solid white', margin: '10px'}}>Add another admin?</button>
				</div>
				<input style={{border:'1px solid white'}} className="btn btn-primary" type="submit" value="Add Group" />
			</form>
		</main>
	)
}

export default NewGroup