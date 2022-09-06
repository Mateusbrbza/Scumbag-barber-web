import { Route, Switch, Redirect } from 'react-router-dom';

import CalendarView from './components/Calendar/CalendarView';
import Login from './components/login-screen/Login';

function App() {
    return (
       <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/agenda" component={CalendarView} />
        <Redirect to="/" />
       </Switch>
    )
}

export default App;