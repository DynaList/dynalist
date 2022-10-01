import {useHistory} from 'react-router-dom'

function Error404() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="./images/logo/icons8-kawaii-dinosaur-100.png" style={{width: "70px", marginLeft: 'auto', marginRight: 'auto'}}></img>
            <button type="button" onClick={goBack}>Go back</button>
        </div>
    );
}

export default Error404;