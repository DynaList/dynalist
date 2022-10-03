import {useHistory} from 'react-router-dom'

function Error404() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <section className="flex items-center h-screen p-16 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <img src="./images/logo/icons8-kawaii-dinosaur-100.png" ></img>
                    <div className="max-w-xl text-center">
                        <h2 className="my-8 font-extrabold text-3xl dark:text-gray-100">
                            <span className="sr-only">Error</span>404: PAGE NOT FOUND
                        </h2>
                        <p className="my-8 text-2xl font-semibold md:text-3xl">Oops, sorry, we can't find this page!</p>
                        <button className= "flex mx-auto bg-logo-purple hover:bg-bright-purple text-background-dark-color font-semibold mt-4 px-6 py-3 rounded" type="button" onClick={goBack}>
                            Go back
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="w-6 h-6">
                                
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" 
                                />
                            </svg>
                        </button>                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Error404;