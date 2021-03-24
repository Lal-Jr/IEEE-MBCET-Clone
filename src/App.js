import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import UpcomingEvents from './pages/UpcomingEventsPage/UpcomingEvents';
import Stories from './pages/StoriesPage/Stories';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/upcomingevents' exact component={UpcomingEvents} />
        <Route path='/stories' exact component={Stories} />
      </Switch>
    </Router>
  );
}

export default App;
