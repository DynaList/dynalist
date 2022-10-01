import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import CurrentUserProvider from './contexts/CurrentUser'
import Home from './components/Home';
import Navigation from './components/Nav'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import Error404 from './components/Error404'
import Footer from './components/Footer';
import UserDashboard from './users/UserDashboard';


function App() {
  return (
    <CurrentUserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" component={UserDashboard} />
            {/* <Route exact path="/groups/new" component={NewPlaceForm} />
            <Route exact path="/groups" component={UserGroups} />
            <Route exact path="/groups/:groupId" component={UserGroupDetails} />
            <Route exact path="/lists" component={UserLists} />
            <Route exact path="/lists/:listId" component={UserListDetails} />
            */}
            <Route path='*' component={Error404} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CurrentUserProvider>
  )
}

export default App;
