import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import CurrentUserProvider from './contexts/CurrentUser'
import Home from './components/Home';
import Navigation from './components/Nav'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Error404 from './components/Error404'
import Footer from './components/Footer';

function App() {
  return (
    <CurrentUserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            {/* <Route exact path="/places" component={PlaceIndex} />
            <Route exact path="/places/new" component={NewPlaceForm} />
            <Route exact path="/places/:placeId" component={PlaceDetails} />
            <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
            <Route path="/" component={Error404} /> */}
            <Route path='*' component={Error404} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CurrentUserProvider>
  )
}

export default App;
