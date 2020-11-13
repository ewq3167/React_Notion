
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Member from './page/member/Member';
import Main from './page/main/Main';
// <Router> </Route> 차이 알아보기

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader}/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path ="/members" component={Member}/>
          <Route path="*">
            <h1> 404 NOT FOUND </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
