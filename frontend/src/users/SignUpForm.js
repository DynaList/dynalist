import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"

export default function SignUpForm() {

	const history = useHistory()

	const [user, setUser] = useState({
		firstName: '',
		lastName:'',
		email: '',
		password: '',
		country:'',
		street:'',
		city:'',
		state:'',
		zip:''
	})

	async function handleSubmit(e) {
		e.preventDefault()
        // fetch refering to backend user auth file- adjust when file created.
		console.log(`${process.env.REACT_APP_SERVER_URL}user/new`)
		await fetch(`${process.env.REACT_APP_SERVER_URL}user/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
            {/* <form> */}
				<div className="">
					<div className="">
						<label htmlFor="firstName">User Name</label>
						<input
							required
							value={user.name}
							onChange={e => setUser({ ...user, name: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					{/* <div className="">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div> */}
				</div>
				<div className="">
					<div className="">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
					<div className="">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input className="" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}
