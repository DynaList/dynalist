import { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import UserNav from "./UserNav"
import UserBanner from "./UserBanner"
import { CurrentUser } from "../contexts/CurrentUser"
import serverRequest from "../api/backServer"

function NewGroup() {

	const history = useHistory()
	
	const {currentUser, setCurrentUser} = useContext(CurrentUser)

	useEffect(() => {
		console.log("Before fetchSession");
	
		const fetchSession = async () => {
		  console.log("Try");
	
		  try {
			console.log("Before API call");
	
			const requestUser = await serverRequest.get("api/sessions");
			console.log(requestUser);
	
			setCurrentUser({ ...currentUser, ...requestUser.data.user });
		  } catch (error) {
			if (error.message !== "Request failed with status code 403") {
			  console.log(error);
			}
	
			// logOut()
		  }
	
		  console.log("Before 30");
		};
	
		fetchSession();
	  }, []);
	
	const [group, setGroup] = useState({
		name: '',
        members: [],
        admins: [],
	})

    const [members, setMembers] = useState([{value: null}])
    const [admins, setAdmins] = useState([{value: null}])

      function handleAddMember() {
        const values = [...members];
        values.push({ value: null });
        setMembers(values);
      }

      function handleAddAdmin() {
        const values = [...admins];
        values.push({value: null});
        setAdmins(values);
      }


	async function handleSubmit(e) {
		e.preventDefault()

		let sentGroup = {
			name: group.name,
			members: [currentUser._id],
			admins: [currentUser._id]
		}

		console.log(sentGroup)
		serverRequest.post("api/groups/new", JSON.stringify(sentGroup))
		// await fetch(`${process.env.REACT_APP_SERVER_URL}api/groups/new`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(sentGroup)
		// })

		history.push('/dashboard')
	}
	
	return (
		<div className="min-h-full">
			<UserNav />
			  <div>
				<header className="bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow">
					<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight">DynoPacks</h1>
					</div>
				</header>
			</div>
			<main>
				<div className="w-full max-w-md px-2 mt-10 sm:px-0 mx-auto flex space-x-1 p-5"></div>
				
				<div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
					<div className="px-4 pb-6 sm:px-0">
						<div className="mt-10 sm:mt-0 overflow-hidden rounded-md bg-white">
							<div className="md:grid md:grid-cols-2 md:gap-6">
            					<div className="mt-5 md:col-span-2 md:mt-0 px-4 py-5 sm:p-6 text-background-dark-color">
									<h2 className="text-background-dark-color my-6 text-center text-3xl font-bold tracking-tight">Add a New Group</h2>
									<form onSubmit={handleSubmit} className="text-background-dark-color">
										<div className="overflow-hidden shadow sm:rounded-md">
											<div className="px-4 py-5 sm:p-6 text-background-dark-color">
												<div className="grid grid-cols-6 gap-6">
													<div className="col-span-6 sm:col-span-2">
														<label htmlFor="name" className="block text-sm font-medium text-gray-700">Group Name: </label>
														<input
															required
															value={group.name}
															onChange={e => setGroup({ ...group, name: e.target.value })}
															id="name"
															name="name"
															className= "my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg border"
														/>
													</div>

													{/* <div className="col-span-6 sm:col-span-2">
														<label htmlFor="members" className="block text-sm font-medium text-gray-700">Group Members: </label>                   
														{members.map((member, idx) => {
															return (
																<div key={`${member}-${idx}`}>
																	<input
																		required
																		value={group.members}
																		onChange={e => setGroup({ ...group, members: e.target.value })}
																		id="members"
																		name="members"
																		className= "my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg border"
																	/>
																</div>
															)
														})}
														<button onClick={() => handleAddMember()} className="flex rounded-md border border-logo-purple b py-2 px-4 text-sm font-medium text-background-dark-color  hover:text-logo-purple focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add another member?</button>
													</div>
													
													<div className="col-span-6 sm:col-span-2">
														<label htmlFor="admins" className="block text-sm font-medium text-gray-700">Group Admins: </label>                   
														{admins.map((admin, idx) => {
															return (
																<div key={`${admin}-${idx}`}>
																	<input
																		required
																		value={group.admins}
																		onChange={e => setGroup({ ...group, admins: e.target.value })}
																		className= "my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg border"
																		id="admin"
																		name="admin"
																	/>
																</div>
															)
														})}
														<button onClick={() => handleAddAdmin()} className="flex rounded-md border border-logo-purple b py-2 px-4 text-sm font-medium text-background-dark-color  hover:text-logo-purple focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add another admin?</button>
													</div> */}
												</div>
											</div>
													
											<div className="px-4 py-3 text-right sm:px-6">
												<button
													type="submit"
													value="Add Group"
													className="flex items-center  mx-auto justify-center rounded-md border border-transparent bg-logo-purple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
													>
													Add DynoPack
												</button>
											</div>

										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default NewGroup