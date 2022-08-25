// import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CalendarView from './components/Calendar/CalendarView';
import Login from './components/login-screen/Login';



function App() {
    //const [date, setDate] = useState(new Date());
    return (
       <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/home" component={CalendarView} />

        <Redirect to="/" />
       </Switch>
       //<h1>oi</h1>
    )
}

export default App;