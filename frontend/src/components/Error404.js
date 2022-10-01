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
            <button type="button" onClick={goBack}>Go back</button>
        </div>
    );
}

export default Error404;